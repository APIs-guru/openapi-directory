# UnrestrictedUserEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The accountId of the user | [optional] 
**email** | **str** | The email of the user | [optional] 

## Example

```python
from openapi_client.models.unrestricted_user_email import UnrestrictedUserEmail

# TODO update the JSON string below
json = "{}"
# create an instance of UnrestrictedUserEmail from a JSON string
unrestricted_user_email_instance = UnrestrictedUserEmail.from_json(json)
# print the JSON string representation of the object
print(UnrestrictedUserEmail.to_json())

# convert the object into a dict
unrestricted_user_email_dict = unrestricted_user_email_instance.to_dict()
# create an instance of UnrestrictedUserEmail from a dict
unrestricted_user_email_from_dict = UnrestrictedUserEmail.from_dict(unrestricted_user_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


