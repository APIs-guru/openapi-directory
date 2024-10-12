# ChangePassword


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_password** | **str** |  | 
**old_password** | **str** |  | 

## Example

```python
from openapi_client.models.change_password import ChangePassword

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePassword from a JSON string
change_password_instance = ChangePassword.from_json(json)
# print the JSON string representation of the object
print(ChangePassword.to_json())

# convert the object into a dict
change_password_dict = change_password_instance.to_dict()
# create an instance of ChangePassword from a dict
change_password_from_dict = ChangePassword.from_dict(change_password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


