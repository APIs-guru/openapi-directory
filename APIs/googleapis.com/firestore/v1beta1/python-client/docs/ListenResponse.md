# ListenResponse

The response for Firestore.Listen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_change** | [**DocumentChange**](DocumentChange.md) |  | [optional] 
**document_delete** | [**DocumentDelete**](DocumentDelete.md) |  | [optional] 
**document_remove** | [**DocumentRemove**](DocumentRemove.md) |  | [optional] 
**filter** | [**ExistenceFilter**](ExistenceFilter.md) |  | [optional] 
**target_change** | [**TargetChange**](TargetChange.md) |  | [optional] 

## Example

```python
from openapi_client.models.listen_response import ListenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListenResponse from a JSON string
listen_response_instance = ListenResponse.from_json(json)
# print the JSON string representation of the object
print(ListenResponse.to_json())

# convert the object into a dict
listen_response_dict = listen_response_instance.to_dict()
# create an instance of ListenResponse from a dict
listen_response_from_dict = ListenResponse.from_dict(listen_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


