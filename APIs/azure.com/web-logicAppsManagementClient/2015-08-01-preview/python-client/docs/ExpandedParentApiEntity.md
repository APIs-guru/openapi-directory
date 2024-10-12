# ExpandedParentApiEntity

expanded parent object for expansion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.expanded_parent_api_entity import ExpandedParentApiEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ExpandedParentApiEntity from a JSON string
expanded_parent_api_entity_instance = ExpandedParentApiEntity.from_json(json)
# print the JSON string representation of the object
print(ExpandedParentApiEntity.to_json())

# convert the object into a dict
expanded_parent_api_entity_dict = expanded_parent_api_entity_instance.to_dict()
# create an instance of ExpandedParentApiEntity from a dict
expanded_parent_api_entity_from_dict = ExpandedParentApiEntity.from_dict(expanded_parent_api_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


