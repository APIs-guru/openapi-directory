# CrossProfilePolicies

Controls the data from the work profile that can be accessed from the personal profile and vice versa. A nonComplianceDetail with MANAGEMENT_MODE is reported if the device does not have a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cross_profile_copy_paste** | **str** | Whether text copied from one profile (personal or work) can be pasted in the other profile. | [optional] 
**cross_profile_data_sharing** | **str** | Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work &amp; personal apps, are configured separately. | [optional] 
**exemptions_to_show_work_contacts_in_personal_profile** | [**PackageNameList**](PackageNameList.md) |  | [optional] 
**show_work_contacts_in_personal_profile** | **str** | Whether personal apps can access contacts stored in the work profile.See also exemptions_to_show_work_contacts_in_personal_profile. | [optional] 
**work_profile_widgets_default** | **str** | Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here. | [optional] 

## Example

```python
from openapi_client.models.cross_profile_policies import CrossProfilePolicies

# TODO update the JSON string below
json = "{}"
# create an instance of CrossProfilePolicies from a JSON string
cross_profile_policies_instance = CrossProfilePolicies.from_json(json)
# print the JSON string representation of the object
print(CrossProfilePolicies.to_json())

# convert the object into a dict
cross_profile_policies_dict = cross_profile_policies_instance.to_dict()
# create an instance of CrossProfilePolicies from a dict
cross_profile_policies_from_dict = CrossProfilePolicies.from_dict(cross_profile_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


