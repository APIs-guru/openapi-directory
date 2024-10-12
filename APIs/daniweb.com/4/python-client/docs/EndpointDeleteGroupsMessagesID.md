# EndpointDeleteGroupsMessagesID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GroupMessage]**](GroupMessage.md) |  | [optional] 
**status** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_delete_groups_messages_id import EndpointDeleteGroupsMessagesID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDeleteGroupsMessagesID from a JSON string
endpoint_delete_groups_messages_id_instance = EndpointDeleteGroupsMessagesID.from_json(json)
# print the JSON string representation of the object
print(EndpointDeleteGroupsMessagesID.to_json())

# convert the object into a dict
endpoint_delete_groups_messages_id_dict = endpoint_delete_groups_messages_id_instance.to_dict()
# create an instance of EndpointDeleteGroupsMessagesID from a dict
endpoint_delete_groups_messages_id_from_dict = EndpointDeleteGroupsMessagesID.from_dict(endpoint_delete_groups_messages_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


