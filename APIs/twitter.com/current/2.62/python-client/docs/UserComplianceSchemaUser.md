# UserComplianceSchemaUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.user_compliance_schema_user import UserComplianceSchemaUser

# TODO update the JSON string below
json = "{}"
# create an instance of UserComplianceSchemaUser from a JSON string
user_compliance_schema_user_instance = UserComplianceSchemaUser.from_json(json)
# print the JSON string representation of the object
print(UserComplianceSchemaUser.to_json())

# convert the object into a dict
user_compliance_schema_user_dict = user_compliance_schema_user_instance.to_dict()
# create an instance of UserComplianceSchemaUser from a dict
user_compliance_schema_user_from_dict = UserComplianceSchemaUser.from_dict(user_compliance_schema_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


