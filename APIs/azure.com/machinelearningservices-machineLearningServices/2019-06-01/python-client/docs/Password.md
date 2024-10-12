# Password


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] [readonly] 
**value** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.password import Password

# TODO update the JSON string below
json = "{}"
# create an instance of Password from a JSON string
password_instance = Password.from_json(json)
# print the JSON string representation of the object
print(Password.to_json())

# convert the object into a dict
password_dict = password_instance.to_dict()
# create an instance of Password from a dict
password_from_dict = Password.from_dict(password_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


