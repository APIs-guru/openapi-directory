# EndpointPostGroupsIDSchedules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostGroupsIDSchedulesDataInner]**](EndpointPostGroupsIDSchedulesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_id_schedules import EndpointPostGroupsIDSchedules

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsIDSchedules from a JSON string
endpoint_post_groups_id_schedules_instance = EndpointPostGroupsIDSchedules.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsIDSchedules.to_json())

# convert the object into a dict
endpoint_post_groups_id_schedules_dict = endpoint_post_groups_id_schedules_instance.to_dict()
# create an instance of EndpointPostGroupsIDSchedules from a dict
endpoint_post_groups_id_schedules_from_dict = EndpointPostGroupsIDSchedules.from_dict(endpoint_post_groups_id_schedules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


