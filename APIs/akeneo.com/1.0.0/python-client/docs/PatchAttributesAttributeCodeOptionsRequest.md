# PatchAttributesAttributeCodeOptionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | Code of attribute related to the attribute option | [optional] 
**code** | **str** | Code of option | 
**labels** | [**AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeOptionsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Order of attribute option | [optional] 

## Example

```python
from openapi_client.models.patch_attributes_attribute_code_options_request import PatchAttributesAttributeCodeOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchAttributesAttributeCodeOptionsRequest from a JSON string
patch_attributes_attribute_code_options_request_instance = PatchAttributesAttributeCodeOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(PatchAttributesAttributeCodeOptionsRequest.to_json())

# convert the object into a dict
patch_attributes_attribute_code_options_request_dict = patch_attributes_attribute_code_options_request_instance.to_dict()
# create an instance of PatchAttributesAttributeCodeOptionsRequest from a dict
patch_attributes_attribute_code_options_request_from_dict = PatchAttributesAttributeCodeOptionsRequest.from_dict(patch_attributes_attribute_code_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


