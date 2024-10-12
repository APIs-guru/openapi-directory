# UserSuspendComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_suspend** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 

## Example

```python
from openapi_client.models.user_suspend_compliance_schema import UserSuspendComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UserSuspendComplianceSchema from a JSON string
user_suspend_compliance_schema_instance = UserSuspendComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(UserSuspendComplianceSchema.to_json())

# convert the object into a dict
user_suspend_compliance_schema_dict = user_suspend_compliance_schema_instance.to_dict()
# create an instance of UserSuspendComplianceSchema from a dict
user_suspend_compliance_schema_from_dict = UserSuspendComplianceSchema.from_dict(user_suspend_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


