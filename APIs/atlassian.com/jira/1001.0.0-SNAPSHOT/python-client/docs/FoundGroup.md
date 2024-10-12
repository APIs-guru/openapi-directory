# FoundGroup

A group found in a search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. | [optional] 
**html** | **str** | The group name with the matched query string highlighted with the HTML bold tag. | [optional] 
**labels** | [**List[GroupLabel]**](GroupLabel.md) |  | [optional] 
**name** | **str** | The name of the group. The name of a group is mutable, to reliably identify a group use &#x60;&#x60;groupId&#x60;.&#x60; | [optional] 

## Example

```python
from openapi_client.models.found_group import FoundGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FoundGroup from a JSON string
found_group_instance = FoundGroup.from_json(json)
# print the JSON string representation of the object
print(FoundGroup.to_json())

# convert the object into a dict
found_group_dict = found_group_instance.to_dict()
# create an instance of FoundGroup from a dict
found_group_from_dict = FoundGroup.from_dict(found_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


