# GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest

Request message for SiteSearchEngineService.BatchCreateTargetSites method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudDiscoveryengineV1alphaCreateTargetSiteRequest]**](GoogleCloudDiscoveryengineV1alphaCreateTargetSiteRequest.md) | Required. The request message specifying the resources to create. A maximum of 20 TargetSites can be created in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_batch_create_target_sites_request import GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest from a JSON string
google_cloud_discoveryengine_v1alpha_batch_create_target_sites_request_instance = GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_batch_create_target_sites_request_dict = google_cloud_discoveryengine_v1alpha_batch_create_target_sites_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest from a dict
google_cloud_discoveryengine_v1alpha_batch_create_target_sites_request_from_dict = GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesRequest.from_dict(google_cloud_discoveryengine_v1alpha_batch_create_target_sites_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


