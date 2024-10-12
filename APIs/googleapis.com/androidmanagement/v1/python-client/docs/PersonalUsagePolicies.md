# PersonalUsagePolicies

Policies controlling personal usage on a company-owned device with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_types_with_management_disabled** | **List[str]** | Account types that can&#39;t be managed by the user. | [optional] 
**camera_disabled** | **bool** | If true, the camera is disabled on the personal profile. | [optional] 
**max_days_with_work_off** | **int** | Controls how long the work profile can stay off. The minimum duration must be at least 3 days. Other details are as follows: - If the duration is set to 0, the feature is turned off. - If the duration is set to a value smaller than the minimum duration, the feature returns an error. *Note:* If you want to avoid personal profiles being suspended during long periods of off-time, you can temporarily set a large value for this parameter. | [optional] 
**personal_applications** | [**List[PersonalApplicationPolicy]**](PersonalApplicationPolicy.md) | Policy applied to applications in the personal profile. | [optional] 
**personal_play_store_mode** | **str** | Used together with personalApplications to control how apps in the personal profile are allowed or blocked. | [optional] 
**screen_capture_disabled** | **bool** | If true, screen capture is disabled for all users. | [optional] 

## Example

```python
from openapi_client.models.personal_usage_policies import PersonalUsagePolicies

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalUsagePolicies from a JSON string
personal_usage_policies_instance = PersonalUsagePolicies.from_json(json)
# print the JSON string representation of the object
print(PersonalUsagePolicies.to_json())

# convert the object into a dict
personal_usage_policies_dict = personal_usage_policies_instance.to_dict()
# create an instance of PersonalUsagePolicies from a dict
personal_usage_policies_from_dict = PersonalUsagePolicies.from_dict(personal_usage_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


