# MailscriptEmailInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | 
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**owner** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.mailscript_email_input import MailscriptEmailInput

# TODO update the JSON string below
json = "{}"
# create an instance of MailscriptEmailInput from a JSON string
mailscript_email_input_instance = MailscriptEmailInput.from_json(json)
# print the JSON string representation of the object
print(MailscriptEmailInput.to_json())

# convert the object into a dict
mailscript_email_input_dict = mailscript_email_input_instance.to_dict()
# create an instance of MailscriptEmailInput from a dict
mailscript_email_input_from_dict = MailscriptEmailInput.from_dict(mailscript_email_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


