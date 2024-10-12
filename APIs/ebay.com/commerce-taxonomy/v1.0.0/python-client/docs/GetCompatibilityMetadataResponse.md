# GetCompatibilityMetadataResponse

This type is used by the base response of the <strong>getCompatibilityProperties</strong> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatibility_properties** | [**List[CompatibilityProperty]**](CompatibilityProperty.md) | This container consists of an array of all compatible vehicle properties applicable to the specified eBay marketplace and eBay category ID. | [optional] 

## Example

```python
from openapi_client.models.get_compatibility_metadata_response import GetCompatibilityMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCompatibilityMetadataResponse from a JSON string
get_compatibility_metadata_response_instance = GetCompatibilityMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(GetCompatibilityMetadataResponse.to_json())

# convert the object into a dict
get_compatibility_metadata_response_dict = get_compatibility_metadata_response_instance.to_dict()
# create an instance of GetCompatibilityMetadataResponse from a dict
get_compatibility_metadata_response_from_dict = GetCompatibilityMetadataResponse.from_dict(get_compatibility_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


