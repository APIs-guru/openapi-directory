# UpdateCallRequestTransferAnswerUrlDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Always &#x60;ncco&#x60; | 
**url** | **List[str]** | The URL that Vonage makes a request to. Must return an NCCO. | 

## Example

```python
from openapi_client.models.update_call_request_transfer_answer_url_destination import UpdateCallRequestTransferAnswerUrlDestination

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallRequestTransferAnswerUrlDestination from a JSON string
update_call_request_transfer_answer_url_destination_instance = UpdateCallRequestTransferAnswerUrlDestination.from_json(json)
# print the JSON string representation of the object
print(UpdateCallRequestTransferAnswerUrlDestination.to_json())

# convert the object into a dict
update_call_request_transfer_answer_url_destination_dict = update_call_request_transfer_answer_url_destination_instance.to_dict()
# create an instance of UpdateCallRequestTransferAnswerUrlDestination from a dict
update_call_request_transfer_answer_url_destination_from_dict = UpdateCallRequestTransferAnswerUrlDestination.from_dict(update_call_request_transfer_answer_url_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


