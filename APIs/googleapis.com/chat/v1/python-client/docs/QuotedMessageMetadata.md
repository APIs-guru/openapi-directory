# QuotedMessageMetadata

Information about a quoted message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **str** | Output only. The timestamp when the quoted message was created or when the quoted message was last updated. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the quoted message. Format: &#x60;spaces/{space}/messages/{message}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.quoted_message_metadata import QuotedMessageMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of QuotedMessageMetadata from a JSON string
quoted_message_metadata_instance = QuotedMessageMetadata.from_json(json)
# print the JSON string representation of the object
print(QuotedMessageMetadata.to_json())

# convert the object into a dict
quoted_message_metadata_dict = quoted_message_metadata_instance.to_dict()
# create an instance of QuotedMessageMetadata from a dict
quoted_message_metadata_from_dict = QuotedMessageMetadata.from_dict(quoted_message_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


