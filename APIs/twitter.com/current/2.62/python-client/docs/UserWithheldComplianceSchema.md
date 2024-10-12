# UserWithheldComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_withheld** | [**UserTakedownComplianceSchema**](UserTakedownComplianceSchema.md) |  | 

## Example

```python
from openapi_client.models.user_withheld_compliance_schema import UserWithheldComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UserWithheldComplianceSchema from a JSON string
user_withheld_compliance_schema_instance = UserWithheldComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(UserWithheldComplianceSchema.to_json())

# convert the object into a dict
user_withheld_compliance_schema_dict = user_withheld_compliance_schema_instance.to_dict()
# create an instance of UserWithheldComplianceSchema from a dict
user_withheld_compliance_schema_from_dict = UserWithheldComplianceSchema.from_dict(user_withheld_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


