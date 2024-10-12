# UserComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_at** | **datetime** | Event time. | 
**user** | [**UserComplianceSchemaUser**](UserComplianceSchemaUser.md) |  | 

## Example

```python
from openapi_client.models.user_compliance_schema import UserComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UserComplianceSchema from a JSON string
user_compliance_schema_instance = UserComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(UserComplianceSchema.to_json())

# convert the object into a dict
user_compliance_schema_dict = user_compliance_schema_instance.to_dict()
# create an instance of UserComplianceSchema from a dict
user_compliance_schema_from_dict = UserComplianceSchema.from_dict(user_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


