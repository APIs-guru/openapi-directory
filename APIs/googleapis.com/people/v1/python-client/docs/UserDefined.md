# UserDefined

Arbitrary user data that is populated by the end users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The end user specified key of the user defined data. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The end user specified value of the user defined data. | [optional] 

## Example

```python
from openapi_client.models.user_defined import UserDefined

# TODO update the JSON string below
json = "{}"
# create an instance of UserDefined from a JSON string
user_defined_instance = UserDefined.from_json(json)
# print the JSON string representation of the object
print(UserDefined.to_json())

# convert the object into a dict
user_defined_dict = user_defined_instance.to_dict()
# create an instance of UserDefined from a dict
user_defined_from_dict = UserDefined.from_dict(user_defined_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


