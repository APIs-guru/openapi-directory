# GoogleCloudDiscoveryengineV1betaSiteVerificationInfo

Verification information for target sites in advanced site search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site_verification_state** | **str** | Site verification state indicating the ownership and validity. | [optional] 
**verify_time** | **str** | Latest site verification time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_site_verification_info import GoogleCloudDiscoveryengineV1betaSiteVerificationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSiteVerificationInfo from a JSON string
google_cloud_discoveryengine_v1beta_site_verification_info_instance = GoogleCloudDiscoveryengineV1betaSiteVerificationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSiteVerificationInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_site_verification_info_dict = google_cloud_discoveryengine_v1beta_site_verification_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSiteVerificationInfo from a dict
google_cloud_discoveryengine_v1beta_site_verification_info_from_dict = GoogleCloudDiscoveryengineV1betaSiteVerificationInfo.from_dict(google_cloud_discoveryengine_v1beta_site_verification_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


