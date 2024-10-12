# EndpointGetGroupsMessagesIDMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GroupMessageData]**](GroupMessageData.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_messages_id_metadata import EndpointGetGroupsMessagesIDMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsMessagesIDMetadata from a JSON string
endpoint_get_groups_messages_id_metadata_instance = EndpointGetGroupsMessagesIDMetadata.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsMessagesIDMetadata.to_json())

# convert the object into a dict
endpoint_get_groups_messages_id_metadata_dict = endpoint_get_groups_messages_id_metadata_instance.to_dict()
# create an instance of EndpointGetGroupsMessagesIDMetadata from a dict
endpoint_get_groups_messages_id_metadata_from_dict = EndpointGetGroupsMessagesIDMetadata.from_dict(endpoint_get_groups_messages_id_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


