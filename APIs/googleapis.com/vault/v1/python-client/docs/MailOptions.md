# MailOptions

Additional options for Gmail search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_side_encrypted_option** | **str** | Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both. | [optional] 
**exclude_drafts** | **bool** | Set to **true** to exclude drafts. | [optional] 

## Example

```python
from openapi_client.models.mail_options import MailOptions

# TODO update the JSON string below
json = "{}"
# create an instance of MailOptions from a JSON string
mail_options_instance = MailOptions.from_json(json)
# print the JSON string representation of the object
print(MailOptions.to_json())

# convert the object into a dict
mail_options_dict = mail_options_instance.to_dict()
# create an instance of MailOptions from a dict
mail_options_from_dict = MailOptions.from_dict(mail_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


