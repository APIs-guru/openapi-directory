# GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest

Request message for SiteSearchEngineService.BatchCreateTargetSites method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest]**](GoogleCloudDiscoveryengineV1betaCreateTargetSiteRequest.md) | Required. The request message specifying the resources to create. A maximum of 20 TargetSites can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_batch_create_target_sites_request import GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest from a JSON string
google_cloud_discoveryengine_v1beta_batch_create_target_sites_request_instance = GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_batch_create_target_sites_request_dict = google_cloud_discoveryengine_v1beta_batch_create_target_sites_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest from a dict
google_cloud_discoveryengine_v1beta_batch_create_target_sites_request_from_dict = GoogleCloudDiscoveryengineV1betaBatchCreateTargetSitesRequest.from_dict(google_cloud_discoveryengine_v1beta_batch_create_target_sites_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


