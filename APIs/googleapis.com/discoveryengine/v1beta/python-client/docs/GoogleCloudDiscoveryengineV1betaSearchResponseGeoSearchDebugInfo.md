# GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo

Debug information specifically related to forward geocoding issues arising from Geolocation Search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | The error produced. | [optional] 
**original_address_query** | **str** | The address from which forward geocoding ingestion produced issues. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_geo_search_debug_info import GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo from a JSON string
google_cloud_discoveryengine_v1beta_search_response_geo_search_debug_info_instance = GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_geo_search_debug_info_dict = google_cloud_discoveryengine_v1beta_search_response_geo_search_debug_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo from a dict
google_cloud_discoveryengine_v1beta_search_response_geo_search_debug_info_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo.from_dict(google_cloud_discoveryengine_v1beta_search_response_geo_search_debug_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


