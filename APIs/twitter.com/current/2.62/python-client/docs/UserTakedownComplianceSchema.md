# UserTakedownComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_at** | **datetime** | Event time. | 
**user** | [**UserComplianceSchemaUser**](UserComplianceSchemaUser.md) |  | 
**withheld_in_countries** | **List[str]** |  | 

## Example

```python
from openapi_client.models.user_takedown_compliance_schema import UserTakedownComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UserTakedownComplianceSchema from a JSON string
user_takedown_compliance_schema_instance = UserTakedownComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(UserTakedownComplianceSchema.to_json())

# convert the object into a dict
user_takedown_compliance_schema_dict = user_takedown_compliance_schema_instance.to_dict()
# create an instance of UserTakedownComplianceSchema from a dict
user_takedown_compliance_schema_from_dict = UserTakedownComplianceSchema.from_dict(user_takedown_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


