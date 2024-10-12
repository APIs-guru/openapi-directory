# SeveralAttributeGroupsPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Attribute codes that compose the attribute group | [optional] 
**code** | **str** | Attribute group code | 
**labels** | [**AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels**](AttributeGroupsAllOfEmbeddedItemsInnerAllOfLabels.md) |  | [optional] 
**sort_order** | **int** | Attribute group order among other attribute groups | [optional] 

## Example

```python
from openapi_client.models.several_attribute_groups_patch_request import SeveralAttributeGroupsPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SeveralAttributeGroupsPatchRequest from a JSON string
several_attribute_groups_patch_request_instance = SeveralAttributeGroupsPatchRequest.from_json(json)
# print the JSON string representation of the object
print(SeveralAttributeGroupsPatchRequest.to_json())

# convert the object into a dict
several_attribute_groups_patch_request_dict = several_attribute_groups_patch_request_instance.to_dict()
# create an instance of SeveralAttributeGroupsPatchRequest from a dict
several_attribute_groups_patch_request_from_dict = SeveralAttributeGroupsPatchRequest.from_dict(several_attribute_groups_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


