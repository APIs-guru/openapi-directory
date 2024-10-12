# EmailVerifyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The email domain | 
**domain_error** | **bool** | True if this address has a domain error (e.g. no valid mail server records) | 
**email** | **str** | The email address. If you have used the fix-typos option then this will be the fixed address | 
**is_catch_all** | **bool** | True if this email domain has a catch-all policy (it will accept mail for any username) | 
**is_deferred** | **bool** | True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying | 
**is_disposable** | **bool** | True if this address is a disposable, temporary or darknet related email address | 
**is_freemail** | **bool** | True if this address is a free-mail address | 
**is_personal** | **bool** | True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc. | 
**provider** | **str** | The email service provider domain | 
**smtp_response** | **str** | The raw SMTP response message received during verification | 
**smtp_status** | **str** | The SMTP verification status for the address: &lt;br&gt; &lt;ul&gt; &lt;li&gt;ok - SMTP verification was successful, this is a real address that can receive mail&lt;/li&gt; &lt;li&gt;invalid - this is not a valid email address (has either a domain or syntax error)&lt;/li&gt; &lt;li&gt;absent - this address is not registered with the email service provider&lt;/li&gt; &lt;li&gt;unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection&lt;/li&gt; &lt;li&gt;unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)&lt;/li&gt; &lt;/ul&gt; | 
**syntax_error** | **bool** | True if this address has a syntax error | 
**typos_fixed** | **bool** | True if typos have been fixed | 
**valid** | **bool** | Is this a valid email address (syntax and domain is valid) | 
**verified** | **bool** | True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details | 

## Example

```python
from openapi_client.models.email_verify_response import EmailVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailVerifyResponse from a JSON string
email_verify_response_instance = EmailVerifyResponse.from_json(json)
# print the JSON string representation of the object
print(EmailVerifyResponse.to_json())

# convert the object into a dict
email_verify_response_dict = email_verify_response_instance.to_dict()
# create an instance of EmailVerifyResponse from a dict
email_verify_response_from_dict = EmailVerifyResponse.from_dict(email_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


