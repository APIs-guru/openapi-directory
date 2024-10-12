# UserCreateParameters

User create details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserCreateParameterProperties**](UserCreateParameterProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_create_parameters import UserCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UserCreateParameters from a JSON string
user_create_parameters_instance = UserCreateParameters.from_json(json)
# print the JSON string representation of the object
print(UserCreateParameters.to_json())

# convert the object into a dict
user_create_parameters_dict = user_create_parameters_instance.to_dict()
# create an instance of UserCreateParameters from a dict
user_create_parameters_from_dict = UserCreateParameters.from_dict(user_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


