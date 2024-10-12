# CompatibilityPropertyValue

This type is used by the <strong>compatibilityPropertyValues</strong> array that is returned in the <strong>getCompatibilityPropertyValues</strong> response. The <strong>compatibilityPropertyValues</strong> array contains all compatible vehicle property values that match the specified eBay marketplace, specified eBay category, and filters in the request. If the <strong>compatibility_property</strong> parameter value in the request is 'Trim', each value returned in each <strong>value</strong> field will be a different vehicle trim, applicable to any filters that are set in the <string>filter</string> query parameter of the request, and also based on the eBay marketplace and category specified in the call request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Each value field shows one applicable compatible vehicle property value. The values that are returned will depend on the specified eBay marketplace, specified eBay category, and filters in the request. | [optional] 

## Example

```python
from openapi_client.models.compatibility_property_value import CompatibilityPropertyValue

# TODO update the JSON string below
json = "{}"
# create an instance of CompatibilityPropertyValue from a JSON string
compatibility_property_value_instance = CompatibilityPropertyValue.from_json(json)
# print the JSON string representation of the object
print(CompatibilityPropertyValue.to_json())

# convert the object into a dict
compatibility_property_value_dict = compatibility_property_value_instance.to_dict()
# create an instance of CompatibilityPropertyValue from a dict
compatibility_property_value_from_dict = CompatibilityPropertyValue.from_dict(compatibility_property_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


