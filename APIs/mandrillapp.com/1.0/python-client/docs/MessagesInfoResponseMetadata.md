# MessagesInfoResponseMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_info_response_metadata import MessagesInfoResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesInfoResponseMetadata from a JSON string
messages_info_response_metadata_instance = MessagesInfoResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(MessagesInfoResponseMetadata.to_json())

# convert the object into a dict
messages_info_response_metadata_dict = messages_info_response_metadata_instance.to_dict()
# create an instance of MessagesInfoResponseMetadata from a dict
messages_info_response_metadata_from_dict = MessagesInfoResponseMetadata.from_dict(messages_info_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


