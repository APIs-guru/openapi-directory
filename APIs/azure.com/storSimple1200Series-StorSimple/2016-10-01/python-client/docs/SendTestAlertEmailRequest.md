# SendTestAlertEmailRequest

Request for sending test alert email

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_list** | **List[str]** | List of emails to send the test alerts | 

## Example

```python
from openapi_client.models.send_test_alert_email_request import SendTestAlertEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendTestAlertEmailRequest from a JSON string
send_test_alert_email_request_instance = SendTestAlertEmailRequest.from_json(json)
# print the JSON string representation of the object
print(SendTestAlertEmailRequest.to_json())

# convert the object into a dict
send_test_alert_email_request_dict = send_test_alert_email_request_instance.to_dict()
# create an instance of SendTestAlertEmailRequest from a dict
send_test_alert_email_request_from_dict = SendTestAlertEmailRequest.from_dict(send_test_alert_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


