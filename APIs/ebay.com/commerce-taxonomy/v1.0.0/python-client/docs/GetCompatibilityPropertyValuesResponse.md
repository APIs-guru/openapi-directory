# GetCompatibilityPropertyValuesResponse

The base response type of the <strong>getCompatibilityPropertyValues</strong> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_property_values** | [**List[CompatibilityPropertyValue]**](CompatibilityPropertyValue.md) | This array contains all compatible vehicle property values that match the specified eBay marketplace, specified eBay category, and filters in the request. If the compatibility_property parameter value in the request is &#39;Trim&#39;, each value returned in each value field will be a different vehicle trim, applicable to any filters that are set in the filter query parameter of the request, and also based on the eBay marketplace and category specified in the call request. | [optional] 

## Example

```python
from openapi_client.models.get_compatibility_property_values_response import GetCompatibilityPropertyValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCompatibilityPropertyValuesResponse from a JSON string
get_compatibility_property_values_response_instance = GetCompatibilityPropertyValuesResponse.from_json(json)
# print the JSON string representation of the object
print(GetCompatibilityPropertyValuesResponse.to_json())

# convert the object into a dict
get_compatibility_property_values_response_dict = get_compatibility_property_values_response_instance.to_dict()
# create an instance of GetCompatibilityPropertyValuesResponse from a dict
get_compatibility_property_values_response_from_dict = GetCompatibilityPropertyValuesResponse.from_dict(get_compatibility_property_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


