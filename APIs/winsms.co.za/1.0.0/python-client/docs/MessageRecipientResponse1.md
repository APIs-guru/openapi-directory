# MessageRecipientResponse1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_error** | **str** | If the ***accepted*** value is **false**, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank. Possible values-   | Value | Description |   |-------|-------------|   |INSUFFICIENT&amp;nbsp;CREDITS | The User Account has insufficient credits to send the message |   |ACCOUNTLOCKED | The specified User Account is locked   |TRIALNOT2SELF | Trial Account Restriction – Message not to own number. &lt;a href&#x3D;\&quot;https://support.winsms.co.za/trial-account-restrictions/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;More Info&lt;/a&gt; |   |TOOLONG | The &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/GSM_03.38#GSM_7-bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_/_GSM_03.38\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GSM 7-bit encoded&lt;/a&gt; message length exceeded 918 characters |   |BADDEST | An invalid mobile number was supplied, or the recipient has been blacklisted from receiving messages |   |OPTEDOUT | The recipient has opted out from receiving any further messages from the user |   |WASPADNC | The number is on the WASPA Do Not Contact List (DNC).&lt;br&gt;If you are sending transactional messages then you can bypass the DNC list. &lt;a href&#x3D;\&quot;https://zasupport.winsms.co.za/portal/en/kb/articles/marketing-vs-transactional-sms/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Read this article&lt;/a&gt; for instructions. |   | &amp;nbsp; | &amp;nbsp; |  | [optional] 
**accepted** | **bool** | A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be **false** If you have insufficient credits or the recipient mobile number supplied is not valid.  | [optional] 
**api_message_id** | **int** | The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be **null**.  | [optional] 
**client_message_id** | **str** | If the optional ***clientMessageId*** value was specified in the recipient object for the recipient, it will be returned here. If not, ***clientMessageId*** will be **null**.  | [optional] 
**credit_cost** | **float** | The number of credits deducted from your account for the SMS to this recipient.  The credit cost is based on the destination country of the recipient and the length (number of segments) of the message.  This credit cost will be reimbursed if the message is scheduled and subsequently deleted.  If the recipient is not accepted for delivery, the ***creditCost*** value will be **null**.  | [optional] 
**mobile_number** | **str** | The mobile number specified as the ***mobileNumber*** value of the recipient object of the request.  | [optional] 
**new_credit_balance** | **float** | The number of WinSMS credits remaining in your account after processing this recipient.  | [optional] 
**scheduled_time** | **str** | The date and time that the message was scheduled for delivery to the recipient.  If no ***scheduledTime*** value was specified in the request, or the recipient was not accepted for delivery, this value will be **null**.  | [optional] 

## Example

```python
from openapi_client.models.message_recipient_response1 import MessageRecipientResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of MessageRecipientResponse1 from a JSON string
message_recipient_response1_instance = MessageRecipientResponse1.from_json(json)
# print the JSON string representation of the object
print(MessageRecipientResponse1.to_json())

# convert the object into a dict
message_recipient_response1_dict = message_recipient_response1_instance.to_dict()
# create an instance of MessageRecipientResponse1 from a dict
message_recipient_response1_from_dict = MessageRecipientResponse1.from_dict(message_recipient_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


