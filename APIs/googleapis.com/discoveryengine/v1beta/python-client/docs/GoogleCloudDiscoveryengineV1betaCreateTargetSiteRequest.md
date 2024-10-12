# GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest

Request message for SiteSearchEngineService.CreateTargetSite method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. Parent resource name of TargetSite, such as &#x60;projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine&#x60;. | [optional] 
**target_site** | [**GoogleCloudDiscoveryengineV1betaTargetSite**](GoogleCloudDiscoveryengineV1betaTargetSite.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_create_target_site_request import GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest from a JSON string
google_cloud_discoveryengine_v1beta_create_target_site_request_instance = GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_create_target_site_request_dict = google_cloud_discoveryengine_v1beta_create_target_site_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest from a dict
google_cloud_discoveryengine_v1beta_create_target_site_request_from_dict = GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest.from_dict(google_cloud_discoveryengine_v1beta_create_target_site_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


