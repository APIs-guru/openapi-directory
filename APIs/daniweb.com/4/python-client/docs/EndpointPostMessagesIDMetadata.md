# EndpointPostMessagesIDMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, List[str]]** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_post_messages_id_metadata import EndpointPostMessagesIDMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPostMessagesIDMetadata from a JSON string
endpoint_post_messages_id_metadata_instance = EndpointPostMessagesIDMetadata.from_json(json)
# print the JSON string representation of the object
print(EndpointPostMessagesIDMetadata.to_json())

# convert the object into a dict
endpoint_post_messages_id_metadata_dict = endpoint_post_messages_id_metadata_instance.to_dict()
# create an instance of EndpointPostMessagesIDMetadata from a dict
endpoint_post_messages_id_metadata_from_dict = EndpointPostMessagesIDMetadata.from_dict(endpoint_post_messages_id_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


