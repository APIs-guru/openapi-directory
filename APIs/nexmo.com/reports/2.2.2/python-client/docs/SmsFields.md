# SmsFields

SMS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ref** | **str** | Search for messages with this &#x60;account_ref&#x60;. | [optional] 
**client_ref** | **str** | Search for messages with this &#x60;client_ref&#x60;. | [optional] 
**direction** | [**Direction**](Direction.md) |  | 
**var_from** | **str** | Request from this number. | [optional] 
**include_message** | **bool** | Include the text of messages in the report. | [optional] [default to False]
**network** | **str** | Network used to send the request. | [optional] 
**product** | [**ProductSms**](ProductSms.md) |  | 
**show_concatenated** | **bool** | Indicates whether the SMS was split up into multiple parts (due to its length). | [optional] [default to False]
**status** | [**SmsStatus**](SmsStatus.md) |  | [optional] 
**to** | **str** | Request to this number. | [optional] 

## Example

```python
from openapi_client.models.sms_fields import SmsFields

# TODO update the JSON string below
json = "{}"
# create an instance of SmsFields from a JSON string
sms_fields_instance = SmsFields.from_json(json)
# print the JSON string representation of the object
print(SmsFields.to_json())

# convert the object into a dict
sms_fields_dict = sms_fields_instance.to_dict()
# create an instance of SmsFields from a dict
sms_fields_from_dict = SmsFields.from_dict(sms_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


