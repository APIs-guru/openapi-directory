# ListenRequest

A request for Firestore.Listen

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_target** | [**Target**](Target.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels associated with this target change. | [optional] 
**remove_target** | **int** | The ID of a target to remove from this stream. | [optional] 

## Example

```python
from openapi_client.models.listen_request import ListenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListenRequest from a JSON string
listen_request_instance = ListenRequest.from_json(json)
# print the JSON string representation of the object
print(ListenRequest.to_json())

# convert the object into a dict
listen_request_dict = listen_request_instance.to_dict()
# create an instance of ListenRequest from a dict
listen_request_from_dict = ListenRequest.from_dict(listen_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


