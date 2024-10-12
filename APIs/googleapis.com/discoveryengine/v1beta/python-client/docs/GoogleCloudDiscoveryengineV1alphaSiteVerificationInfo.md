# GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo

Verification information for target sites in advanced site search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site_verification_state** | **str** | Site verification state indicating the ownership and validity. | [optional] 
**verify_time** | **str** | Latest site verification time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_site_verification_info import GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo from a JSON string
google_cloud_discoveryengine_v1alpha_site_verification_info_instance = GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_site_verification_info_dict = google_cloud_discoveryengine_v1alpha_site_verification_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo from a dict
google_cloud_discoveryengine_v1alpha_site_verification_info_from_dict = GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo.from_dict(google_cloud_discoveryengine_v1alpha_site_verification_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


