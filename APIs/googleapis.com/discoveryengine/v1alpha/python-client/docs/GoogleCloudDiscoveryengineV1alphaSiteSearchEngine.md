# GoogleCloudDiscoveryengineV1alphaSiteSearchEngine

SiteSearchEngine captures DataStore level site search persisting configurations. It is a singleton value per data store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The fully qualified resource name of the site search engine. Format: &#x60;projects/*/locations/*/dataStores/*/siteSearchEngine&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_site_search_engine import GoogleCloudDiscoveryengineV1alphaSiteSearchEngine

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSiteSearchEngine from a JSON string
google_cloud_discoveryengine_v1alpha_site_search_engine_instance = GoogleCloudDiscoveryengineV1alphaSiteSearchEngine.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSiteSearchEngine.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_site_search_engine_dict = google_cloud_discoveryengine_v1alpha_site_search_engine_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSiteSearchEngine from a dict
google_cloud_discoveryengine_v1alpha_site_search_engine_from_dict = GoogleCloudDiscoveryengineV1alphaSiteSearchEngine.from_dict(google_cloud_discoveryengine_v1alpha_site_search_engine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


