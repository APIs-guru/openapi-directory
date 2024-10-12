# UserValidation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 
**valid** | **bool** |  | 

## Example

```python
from openapi_client.models.user_validation import UserValidation

# TODO update the JSON string below
json = "{}"
# create an instance of UserValidation from a JSON string
user_validation_instance = UserValidation.from_json(json)
# print the JSON string representation of the object
print(UserValidation.to_json())

# convert the object into a dict
user_validation_dict = user_validation_instance.to_dict()
# create an instance of UserValidation from a dict
user_validation_from_dict = UserValidation.from_dict(user_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


