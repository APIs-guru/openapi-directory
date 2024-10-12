# EndpointPostGroupsIDSchedulesDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_count** | **float** |  | [optional] 
**var_date** | **date** |  | [optional] 
**first_message** | [**GroupMessage**](GroupMessage.md) |  | [optional] 
**group_count** | **float** |  | [optional] 
**group_id** | **float** |  | [optional] 
**last_message** | [**GroupMessage**](GroupMessage.md) |  | [optional] 
**message_count** | **float** |  | [optional] 
**my_message_count** | **float** |  | [optional] 
**navigation** | [**EndpointPostConversationsIDSchedulesDataInnerNavigation**](EndpointPostConversationsIDSchedulesDataInnerNavigation.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_groups_id_schedules_data_inner import EndpointPostGroupsIDSchedulesDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostGroupsIDSchedulesDataInner from a JSON string
endpoint_post_groups_id_schedules_data_inner_instance = EndpointPostGroupsIDSchedulesDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPostGroupsIDSchedulesDataInner.to_json())

# convert the object into a dict
endpoint_post_groups_id_schedules_data_inner_dict = endpoint_post_groups_id_schedules_data_inner_instance.to_dict()
# create an instance of EndpointPostGroupsIDSchedulesDataInner from a dict
endpoint_post_groups_id_schedules_data_inner_from_dict = EndpointPostGroupsIDSchedulesDataInner.from_dict(endpoint_post_groups_id_schedules_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


