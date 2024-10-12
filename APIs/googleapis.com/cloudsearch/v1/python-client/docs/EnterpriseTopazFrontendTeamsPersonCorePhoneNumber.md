# EnterpriseTopazFrontendTeamsPersonCorePhoneNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | Phone number in no particular format (as comes from the Focus profile). | [optional] 
**phone_url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_frontend_teams_person_core_phone_number import EnterpriseTopazFrontendTeamsPersonCorePhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazFrontendTeamsPersonCorePhoneNumber from a JSON string
enterprise_topaz_frontend_teams_person_core_phone_number_instance = EnterpriseTopazFrontendTeamsPersonCorePhoneNumber.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazFrontendTeamsPersonCorePhoneNumber.to_json())

# convert the object into a dict
enterprise_topaz_frontend_teams_person_core_phone_number_dict = enterprise_topaz_frontend_teams_person_core_phone_number_instance.to_dict()
# create an instance of EnterpriseTopazFrontendTeamsPersonCorePhoneNumber from a dict
enterprise_topaz_frontend_teams_person_core_phone_number_from_dict = EnterpriseTopazFrontendTeamsPersonCorePhoneNumber.from_dict(enterprise_topaz_frontend_teams_person_core_phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


