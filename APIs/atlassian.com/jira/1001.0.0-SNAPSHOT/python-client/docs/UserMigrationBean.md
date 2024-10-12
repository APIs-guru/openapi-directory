# UserMigrationBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_migration_bean import UserMigrationBean

# TODO update the JSON string below
json = "{}"
# create an instance of UserMigrationBean from a JSON string
user_migration_bean_instance = UserMigrationBean.from_json(json)
# print the JSON string representation of the object
print(UserMigrationBean.to_json())

# convert the object into a dict
user_migration_bean_dict = user_migration_bean_instance.to_dict()
# create an instance of UserMigrationBean from a dict
user_migration_bean_from_dict = UserMigrationBean.from_dict(user_migration_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


