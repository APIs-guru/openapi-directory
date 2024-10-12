# EndpointGetGroupsStatusesDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earliest_unseen_message** | [**GroupMessage**](GroupMessage.md) |  | [optional] 
**group** | [**Group**](Group.md) |  | [optional] 
**new_message_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_statuses_data_inner import EndpointGetGroupsStatusesDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsStatusesDataInner from a JSON string
endpoint_get_groups_statuses_data_inner_instance = EndpointGetGroupsStatusesDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsStatusesDataInner.to_json())

# convert the object into a dict
endpoint_get_groups_statuses_data_inner_dict = endpoint_get_groups_statuses_data_inner_instance.to_dict()
# create an instance of EndpointGetGroupsStatusesDataInner from a dict
endpoint_get_groups_statuses_data_inner_from_dict = EndpointGetGroupsStatusesDataInner.from_dict(endpoint_get_groups_statuses_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


