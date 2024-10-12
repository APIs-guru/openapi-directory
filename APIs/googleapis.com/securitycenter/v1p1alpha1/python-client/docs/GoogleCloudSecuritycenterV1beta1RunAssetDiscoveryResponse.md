# GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse

Response of asset discovery run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The duration between asset discovery run start and end | [optional] 
**state** | **str** | The state of an asset discovery run. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1beta1_run_asset_discovery_response import GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse from a JSON string
google_cloud_securitycenter_v1beta1_run_asset_discovery_response_instance = GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1beta1_run_asset_discovery_response_dict = google_cloud_securitycenter_v1beta1_run_asset_discovery_response_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse from a dict
google_cloud_securitycenter_v1beta1_run_asset_discovery_response_from_dict = GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse.from_dict(google_cloud_securitycenter_v1beta1_run_asset_discovery_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


