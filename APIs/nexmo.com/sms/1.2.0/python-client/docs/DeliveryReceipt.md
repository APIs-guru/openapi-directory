# DeliveryReceipt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint. | [optional] 
**client_ref** | **str** | If the &#x60;client-ref&#x60; is set when the SMS is sent, it will be included in the delivery receipt | [optional] 
**err_code** | **str** | The status of the request. Will be a non &#x60;0&#x60; value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details | [optional] 
**message_timestamp** | **str** | The time when Vonage started to push this Delivery Receipt to your webhook endpoint. | [optional] 
**message_id** | **str** | The Vonage ID for this message. | [optional] 
**msisdn** | **str** | The number the message was sent to. Numbers are specified in E.164 format. | [optional] 
**network_code** | **str** | The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with. | [optional] 
**nonce** | **str** | A random string to be used when calculating the signature. _Only included if you have signatures enabled_ | [optional] 
**price** | **str** | The cost of the message | [optional] 
**scts** | **str** | When the DLR was received from the carrier in the following format &#x60;YYMMDDHHMM&#x60;. For example, &#x60;2001011400&#x60; is at &#x60;2020-01-01 14:00&#x60; | [optional] 
**sig** | **str** | The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_ | [optional] 
**status** | **str** | A code that explains where the message is in the delivery process. | [optional] 
**timestamp** | **str** | A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_ | [optional] 
**to** | **str** | The SenderID you set in &#x60;from&#x60; in your request. | [optional] 

## Example

```python
from openapi_client.models.delivery_receipt import DeliveryReceipt

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryReceipt from a JSON string
delivery_receipt_instance = DeliveryReceipt.from_json(json)
# print the JSON string representation of the object
print(DeliveryReceipt.to_json())

# convert the object into a dict
delivery_receipt_dict = delivery_receipt_instance.to_dict()
# create an instance of DeliveryReceipt from a dict
delivery_receipt_from_dict = DeliveryReceipt.from_dict(delivery_receipt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


