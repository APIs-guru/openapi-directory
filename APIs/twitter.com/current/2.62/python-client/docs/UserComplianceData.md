# UserComplianceData

User compliance data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_protect** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 
**user_unprotect** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 
**user_delete** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 
**user_undelete** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 
**user_suspend** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 
**user_unsuspend** | [**UserComplianceSchema**](UserComplianceSchema.md) |  | 
**user_withheld** | [**UserTakedownComplianceSchema**](UserTakedownComplianceSchema.md) |  | 
**scrub_geo** | [**UserScrubGeoObjectSchema**](UserScrubGeoObjectSchema.md) |  | 
**user_profile_modification** | [**UserProfileModificationObjectSchema**](UserProfileModificationObjectSchema.md) |  | 

## Example

```python
from openapi_client.models.user_compliance_data import UserComplianceData

# TODO update the JSON string below
json = "{}"
# create an instance of UserComplianceData from a JSON string
user_compliance_data_instance = UserComplianceData.from_json(json)
# print the JSON string representation of the object
print(UserComplianceData.to_json())

# convert the object into a dict
user_compliance_data_dict = user_compliance_data_instance.to_dict()
# create an instance of UserComplianceData from a dict
user_compliance_data_from_dict = UserComplianceData.from_dict(user_compliance_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


