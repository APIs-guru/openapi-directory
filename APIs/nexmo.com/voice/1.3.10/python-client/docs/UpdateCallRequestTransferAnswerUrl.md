# UpdateCallRequestTransferAnswerUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**RequestTransferActionParam**](RequestTransferActionParam.md) |  | 
**destination** | [**UpdateCallRequestTransferAnswerUrlDestination**](UpdateCallRequestTransferAnswerUrlDestination.md) |  | 

## Example

```python
from openapi_client.models.update_call_request_transfer_answer_url import UpdateCallRequestTransferAnswerUrl

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallRequestTransferAnswerUrl from a JSON string
update_call_request_transfer_answer_url_instance = UpdateCallRequestTransferAnswerUrl.from_json(json)
# print the JSON string representation of the object
print(UpdateCallRequestTransferAnswerUrl.to_json())

# convert the object into a dict
update_call_request_transfer_answer_url_dict = update_call_request_transfer_answer_url_instance.to_dict()
# create an instance of UpdateCallRequestTransferAnswerUrl from a dict
update_call_request_transfer_answer_url_from_dict = UpdateCallRequestTransferAnswerUrl.from_dict(update_call_request_transfer_answer_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


