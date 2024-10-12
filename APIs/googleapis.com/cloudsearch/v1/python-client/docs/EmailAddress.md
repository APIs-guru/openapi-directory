# EmailAddress

A person's email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type** | **str** | If the value of type is custom, this property contains the custom type string. | [optional] 
**email_address** | **str** | The email address. | [optional] 
**email_url** | **str** | The URL to send email. | [optional] 
**primary** | **bool** | Indicates if this is the user&#39;s primary email. Only one entry can be marked as primary. | [optional] 
**type** | **str** | The type of the email account. Acceptable values are: \&quot;custom\&quot;, \&quot;home\&quot;, \&quot;other\&quot;, \&quot;work\&quot;. | [optional] 

## Example

```python
from openapi_client.models.email_address import EmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAddress from a JSON string
email_address_instance = EmailAddress.from_json(json)
# print the JSON string representation of the object
print(EmailAddress.to_json())

# convert the object into a dict
email_address_dict = email_address_instance.to_dict()
# create an instance of EmailAddress from a dict
email_address_from_dict = EmailAddress.from_dict(email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


