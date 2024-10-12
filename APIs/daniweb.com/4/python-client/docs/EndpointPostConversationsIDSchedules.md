# EndpointPostConversationsIDSchedules


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointPostConversationsIDSchedulesDataInner]**](EndpointPostConversationsIDSchedulesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_conversations_id_schedules import EndpointPostConversationsIDSchedules

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostConversationsIDSchedules from a JSON string
endpoint_post_conversations_id_schedules_instance = EndpointPostConversationsIDSchedules.from_json(json)
# print the JSON string representation of the object
print(EndpointPostConversationsIDSchedules.to_json())

# convert the object into a dict
endpoint_post_conversations_id_schedules_dict = endpoint_post_conversations_id_schedules_instance.to_dict()
# create an instance of EndpointPostConversationsIDSchedules from a dict
endpoint_post_conversations_id_schedules_from_dict = EndpointPostConversationsIDSchedules.from_dict(endpoint_post_conversations_id_schedules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


