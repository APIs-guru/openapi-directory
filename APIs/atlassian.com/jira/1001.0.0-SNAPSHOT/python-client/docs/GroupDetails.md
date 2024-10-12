# GroupDetails

Details about a group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_id** | **str** | The ID of the group, which uniquely identifies the group across all Atlassian products. For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. | [optional] 
**name** | **str** | The name of the group. | [optional] 

## Example

```python
from openapi_client.models.group_details import GroupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GroupDetails from a JSON string
group_details_instance = GroupDetails.from_json(json)
# print the JSON string representation of the object
print(GroupDetails.to_json())

# convert the object into a dict
group_details_dict = group_details_instance.to_dict()
# create an instance of GroupDetails from a dict
group_details_from_dict = GroupDetails.from_dict(group_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


