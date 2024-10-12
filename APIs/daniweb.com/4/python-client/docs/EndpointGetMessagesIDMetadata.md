# EndpointGetMessagesIDMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MessageData]**](MessageData.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_messages_id_metadata import EndpointGetMessagesIDMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetMessagesIDMetadata from a JSON string
endpoint_get_messages_id_metadata_instance = EndpointGetMessagesIDMetadata.from_json(json)
# print the JSON string representation of the object
print(EndpointGetMessagesIDMetadata.to_json())

# convert the object into a dict
endpoint_get_messages_id_metadata_dict = endpoint_get_messages_id_metadata_instance.to_dict()
# create an instance of EndpointGetMessagesIDMetadata from a dict
endpoint_get_messages_id_metadata_from_dict = EndpointGetMessagesIDMetadata.from_dict(endpoint_get_messages_id_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


