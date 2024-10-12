# ImportMessagesRequest

Request to import messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_messages_request import ImportMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportMessagesRequest from a JSON string
import_messages_request_instance = ImportMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(ImportMessagesRequest.to_json())

# convert the object into a dict
import_messages_request_dict = import_messages_request_instance.to_dict()
# create an instance of ImportMessagesRequest from a dict
import_messages_request_from_dict = ImportMessagesRequest.from_dict(import_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


