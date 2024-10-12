# CompatibilityProperty

This type is used by the <strong>compatibilityProperties</strong> array that is returned in the <strong>getCompatibilityProperties</strong> call. The <strong>compatibilityProperties</strong> container consists of an array of all compatible vehicle properties applicable to the specified eBay marketplace and eBay category ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_name** | **str** | This is the localized name of the compatible vehicle property. The language that is used will depend on the user making the call, or based on the language specified if the Content-Language HTTP header is used. In some instances, the string value in this field may be the same as the string in the corresponding name field. | [optional] 
**name** | **str** | This is the actual name of the compatible vehicle property as it is known on the specified eBay marketplace and in the eBay category. This is the string value that should be used in the compatibility_property and filter query parameters of a getCompatibilityPropertyValues request URI. Typical vehicle properties are &#39;Make&#39;, &#39;Model&#39;, &#39;Year&#39;, &#39;Engine&#39;, and &#39;Trim&#39;, but will vary based on the eBay marketplace and the eBay category. | [optional] 

## Example

```python
from openapi_client.models.compatibility_property import CompatibilityProperty

# TODO update the JSON string below
json = "{}"
# create an instance of CompatibilityProperty from a JSON string
compatibility_property_instance = CompatibilityProperty.from_json(json)
# print the JSON string representation of the object
print(CompatibilityProperty.to_json())

# convert the object into a dict
compatibility_property_dict = compatibility_property_instance.to_dict()
# create an instance of CompatibilityProperty from a dict
compatibility_property_from_dict = CompatibilityProperty.from_dict(compatibility_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


