# ShareRelationshipsMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ShareMessageData**](ShareMessageData.md) |  | [optional] 

## Example

```python
from openapi_client.models.share_relationships_message import ShareRelationshipsMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ShareRelationshipsMessage from a JSON string
share_relationships_message_instance = ShareRelationshipsMessage.from_json(json)
# print the JSON string representation of the object
print(ShareRelationshipsMessage.to_json())

# convert the object into a dict
share_relationships_message_dict = share_relationships_message_instance.to_dict()
# create an instance of ShareRelationshipsMessage from a dict
share_relationships_message_from_dict = ShareRelationshipsMessage.from_dict(share_relationships_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


