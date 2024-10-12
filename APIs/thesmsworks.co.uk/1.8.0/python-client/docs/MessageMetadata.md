# MessageMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**MetaData**](MetaData.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_metadata import MessageMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MessageMetadata from a JSON string
message_metadata_instance = MessageMetadata.from_json(json)
# print the JSON string representation of the object
print(MessageMetadata.to_json())

# convert the object into a dict
message_metadata_dict = message_metadata_instance.to_dict()
# create an instance of MessageMetadata from a dict
message_metadata_from_dict = MessageMetadata.from_dict(message_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


