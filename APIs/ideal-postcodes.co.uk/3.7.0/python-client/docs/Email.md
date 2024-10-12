# Email


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catchall** | **bool** | Returns &#x60;true&#x60; if this domain accepts all emails regardless of username | 
**deliverable** | **bool** | Returns &#x60;true&#x60; if the email can be delivered | 
**disposable** | **bool** | Returns &#x60;true&#x60; if email comes from a disposable email service like temp-mail | 
**free** | **bool** | Returns &#x60;true&#x60; if the email originates from a free service like Outlook or Gmail. | 
**result** | **str** |  | 
**role** | **bool** | Returns &#x60;true&#x60; if email address represents an organisational role like &#x60;admin&#x60;, &#x60;support&#x60;, &#x60;postmaster&#x60; etc | 

## Example

```python
from openapi_client.models.email import Email

# TODO update the JSON string below
json = "{}"
# create an instance of Email from a JSON string
email_instance = Email.from_json(json)
# print the JSON string representation of the object
print(Email.to_json())

# convert the object into a dict
email_dict = email_instance.to_dict()
# create an instance of Email from a dict
email_from_dict = Email.from_dict(email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


