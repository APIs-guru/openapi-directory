# EndpointPostGroupsSchedules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostGroupsIDSchedulesDataInner]**](EndpointPostGroupsIDSchedulesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_schedules import EndpointPostGroupsSchedules

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsSchedules from a JSON string
endpoint_post_groups_schedules_instance = EndpointPostGroupsSchedules.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsSchedules.to_json())

# convert the object into a dict
endpoint_post_groups_schedules_dict = endpoint_post_groups_schedules_instance.to_dict()
# create an instance of EndpointPostGroupsSchedules from a dict
endpoint_post_groups_schedules_from_dict = EndpointPostGroupsSchedules.from_dict(endpoint_post_groups_schedules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


