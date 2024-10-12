# UpdateOrganizationCameraOnboardingStatusesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | Serial of camera | [optional] 
**wireless_credentials_sent** | **bool** | Note whether credentials were sent successfully | [optional] 

## Example

```python
from openapi_client.models.update_organization_camera_onboarding_statuses_request import UpdateOrganizationCameraOnboardingStatusesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationCameraOnboardingStatusesRequest from a JSON string
update_organization_camera_onboarding_statuses_request_instance = UpdateOrganizationCameraOnboardingStatusesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationCameraOnboardingStatusesRequest.to_json())

# convert the object into a dict
update_organization_camera_onboarding_statuses_request_dict = update_organization_camera_onboarding_statuses_request_instance.to_dict()
# create an instance of UpdateOrganizationCameraOnboardingStatusesRequest from a dict
update_organization_camera_onboarding_statuses_request_from_dict = UpdateOrganizationCameraOnboardingStatusesRequest.from_dict(update_organization_camera_onboarding_statuses_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


