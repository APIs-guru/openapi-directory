# EndpointGetGroupsIDStatusesDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earliest_unseen_message** | [**GroupMessage**](GroupMessage.md) |  | [optional] 
**group** | [**Group**](Group.md) |  | [optional] 
**membership_status** | **bool** |  | [optional] 
**new_message_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_id_statuses_data_inner import EndpointGetGroupsIDStatusesDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsIDStatusesDataInner from a JSON string
endpoint_get_groups_id_statuses_data_inner_instance = EndpointGetGroupsIDStatusesDataInner.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsIDStatusesDataInner.to_json())

# convert the object into a dict
endpoint_get_groups_id_statuses_data_inner_dict = endpoint_get_groups_id_statuses_data_inner_instance.to_dict()
# create an instance of EndpointGetGroupsIDStatusesDataInner from a dict
endpoint_get_groups_id_statuses_data_inner_from_dict = EndpointGetGroupsIDStatusesDataInner.from_dict(endpoint_get_groups_id_statuses_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


