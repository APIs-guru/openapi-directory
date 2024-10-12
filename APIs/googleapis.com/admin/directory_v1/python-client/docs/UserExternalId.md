# UserExternalId

JSON template for an externalId entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type** | **str** | Custom type. | [optional] 
**type** | **str** | The type of the Id. | [optional] 
**value** | **str** | The value of the id. | [optional] 

## Example

```python
from openapi_client.models.user_external_id import UserExternalId

# TODO update the JSON string below
json = "{}"
# create an instance of UserExternalId from a JSON string
user_external_id_instance = UserExternalId.from_json(json)
# print the JSON string representation of the object
print(UserExternalId.to_json())

# convert the object into a dict
user_external_id_dict = user_external_id_instance.to_dict()
# create an instance of UserExternalId from a dict
user_external_id_from_dict = UserExternalId.from_dict(user_external_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


