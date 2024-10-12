# FreeBusyGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendars** | **List[str]** | List of calendars&#39; identifiers within a group. | [optional] 
**errors** | [**List[Error]**](Error.md) | Optional error(s) (if computation for the group failed). | [optional] 

## Example

```python
from openapi_client.models.free_busy_group import FreeBusyGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FreeBusyGroup from a JSON string
free_busy_group_instance = FreeBusyGroup.from_json(json)
# print the JSON string representation of the object
print(FreeBusyGroup.to_json())

# convert the object into a dict
free_busy_group_dict = free_busy_group_instance.to_dict()
# create an instance of FreeBusyGroup from a dict
free_busy_group_from_dict = FreeBusyGroup.from_dict(free_busy_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


