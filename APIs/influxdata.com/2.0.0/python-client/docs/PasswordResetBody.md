# PasswordResetBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | 

## Example

```python
from openapi_client.models.password_reset_body import PasswordResetBody

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordResetBody from a JSON string
password_reset_body_instance = PasswordResetBody.from_json(json)
# print the JSON string representation of the object
print(PasswordResetBody.to_json())

# convert the object into a dict
password_reset_body_dict = password_reset_body_instance.to_dict()
# create an instance of PasswordResetBody from a dict
password_reset_body_from_dict = PasswordResetBody.from_dict(password_reset_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


