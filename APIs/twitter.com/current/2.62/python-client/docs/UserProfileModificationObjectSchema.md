# UserProfileModificationObjectSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_at** | **datetime** | Event time. | 
**new_value** | **str** |  | 
**profile_field** | **str** |  | 
**user** | [**UserComplianceSchemaUser**](UserComplianceSchemaUser.md) |  | 

## Example

```python
from openapi_client.models.user_profile_modification_object_schema import UserProfileModificationObjectSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileModificationObjectSchema from a JSON string
user_profile_modification_object_schema_instance = UserProfileModificationObjectSchema.from_json(json)
# print the JSON string representation of the object
print(UserProfileModificationObjectSchema.to_json())

# convert the object into a dict
user_profile_modification_object_schema_dict = user_profile_modification_object_schema_instance.to_dict()
# create an instance of UserProfileModificationObjectSchema from a dict
user_profile_modification_object_schema_from_dict = UserProfileModificationObjectSchema.from_dict(user_profile_modification_object_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


