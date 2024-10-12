# UpdateCallRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Allow the specified UUID to hear audio | 
**destination** | [**UpdateCallRequestTransferAnswerUrlDestination**](UpdateCallRequestTransferAnswerUrlDestination.md) |  | 

## Example

```python
from openapi_client.models.update_call_request import UpdateCallRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallRequest from a JSON string
update_call_request_instance = UpdateCallRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCallRequest.to_json())

# convert the object into a dict
update_call_request_dict = update_call_request_instance.to_dict()
# create an instance of UpdateCallRequest from a dict
update_call_request_from_dict = UpdateCallRequest.from_dict(update_call_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


