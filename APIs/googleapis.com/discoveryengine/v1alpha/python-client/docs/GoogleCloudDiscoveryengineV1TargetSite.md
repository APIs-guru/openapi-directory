# GoogleCloudDiscoveryengineV1TargetSite

A target site for the SiteSearchEngine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_match** | **bool** | Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine. | [optional] 
**failure_reason** | [**GoogleCloudDiscoveryengineV1TargetSiteFailureReason**](GoogleCloudDiscoveryengineV1TargetSiteFailureReason.md) |  | [optional] 
**generated_uri_pattern** | **str** | Output only. This is system-generated based on the provided_uri_pattern. | [optional] [readonly] 
**indexing_status** | **str** | Output only. Indexing status. | [optional] [readonly] 
**name** | **str** | Output only. The fully qualified resource name of the target site. &#x60;projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}&#x60; The &#x60;target_site_id&#x60; is system-generated. | [optional] [readonly] 
**provided_uri_pattern** | **str** | Required. Input only. The user provided URI pattern from which the &#x60;generated_uri_pattern&#x60; is generated. | [optional] 
**site_verification_info** | [**GoogleCloudDiscoveryengineV1SiteVerificationInfo**](GoogleCloudDiscoveryengineV1SiteVerificationInfo.md) |  | [optional] 
**type** | **str** | The type of the target site, e.g., whether the site is to be included or excluded. | [optional] 
**update_time** | **str** | Output only. The target site&#39;s last updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_target_site import GoogleCloudDiscoveryengineV1TargetSite

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1TargetSite from a JSON string
google_cloud_discoveryengine_v1_target_site_instance = GoogleCloudDiscoveryengineV1TargetSite.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1TargetSite.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_target_site_dict = google_cloud_discoveryengine_v1_target_site_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1TargetSite from a dict
google_cloud_discoveryengine_v1_target_site_from_dict = GoogleCloudDiscoveryengineV1TargetSite.from_dict(google_cloud_discoveryengine_v1_target_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


