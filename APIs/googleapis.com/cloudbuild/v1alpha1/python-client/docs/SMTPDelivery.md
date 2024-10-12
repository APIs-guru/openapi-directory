# SMTPDelivery

SMTPDelivery is the delivery configuration for an SMTP (email) notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_address** | **str** | This is the SMTP account/email that appears in the &#x60;From:&#x60; of the email. If empty, it is assumed to be sender. | [optional] 
**password** | [**NotifierSecretRef**](NotifierSecretRef.md) |  | [optional] 
**port** | **str** | The SMTP port of the server. | [optional] 
**recipient_addresses** | **List[str]** | This is the list of addresses to which we send the email (i.e. in the &#x60;To:&#x60; of the email). | [optional] 
**sender_address** | **str** | This is the SMTP account/email that is used to send the message. | [optional] 
**server** | **str** | The address of the SMTP server. | [optional] 

## Example

```python
from openapi_client.models.smtp_delivery import SMTPDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of SMTPDelivery from a JSON string
smtp_delivery_instance = SMTPDelivery.from_json(json)
# print the JSON string representation of the object
print(SMTPDelivery.to_json())

# convert the object into a dict
smtp_delivery_dict = smtp_delivery_instance.to_dict()
# create an instance of SMTPDelivery from a dict
smtp_delivery_from_dict = SMTPDelivery.from_dict(smtp_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


