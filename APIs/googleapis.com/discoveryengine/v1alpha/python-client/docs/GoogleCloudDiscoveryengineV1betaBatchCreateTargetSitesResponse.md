# GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse

Response message for SiteSearchEngineService.BatchCreateTargetSites method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_sites** | [**List[GoogleCloudDiscoveryengineV1betaTargetSite]**](GoogleCloudDiscoveryengineV1betaTargetSite.md) | TargetSites created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_batch_create_target_sites_response import GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse from a JSON string
google_cloud_discoveryengine_v1beta_batch_create_target_sites_response_instance = GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_batch_create_target_sites_response_dict = google_cloud_discoveryengine_v1beta_batch_create_target_sites_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse from a dict
google_cloud_discoveryengine_v1beta_batch_create_target_sites_response_from_dict = GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesResponse.from_dict(google_cloud_discoveryengine_v1beta_batch_create_target_sites_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


