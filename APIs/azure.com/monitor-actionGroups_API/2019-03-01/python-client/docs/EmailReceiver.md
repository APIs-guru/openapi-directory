# EmailReceiver

An email receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address of this receiver. | 
**name** | **str** | The name of the email receiver. Names must be unique across all receivers within an action group. | 
**status** | [**ReceiverStatus**](ReceiverStatus.md) |  | [optional] 
**use_common_alert_schema** | **bool** | Indicates whether to use common alert schema. | 

## Example

```python
from openapi_client.models.email_receiver import EmailReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of EmailReceiver from a JSON string
email_receiver_instance = EmailReceiver.from_json(json)
# print the JSON string representation of the object
print(EmailReceiver.to_json())

# convert the object into a dict
email_receiver_dict = email_receiver_instance.to_dict()
# create an instance of EmailReceiver from a dict
email_receiver_from_dict = EmailReceiver.from_dict(email_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


