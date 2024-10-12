# ReceivedDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **str** | The GUID of the received document | [optional] 

## Example

```python
from openapi_client.models.received_document import ReceivedDocument

# TODO update the JSON string below
json = "{}"
# create an instance of ReceivedDocument from a JSON string
received_document_instance = ReceivedDocument.from_json(json)
# print the JSON string representation of the object
print(ReceivedDocument.to_json())

# convert the object into a dict
received_document_dict = received_document_instance.to_dict()
# create an instance of ReceivedDocument from a dict
received_document_from_dict = ReceivedDocument.from_dict(received_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


