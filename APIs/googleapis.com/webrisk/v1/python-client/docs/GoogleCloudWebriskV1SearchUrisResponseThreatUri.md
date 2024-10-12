# GoogleCloudWebriskV1SearchUrisResponseThreatUri

Contains threat information on a matching uri.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives. | [optional] 
**threat_types** | **List[str]** | The ThreatList this threat belongs to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_search_uris_response_threat_uri import GoogleCloudWebriskV1SearchUrisResponseThreatUri

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1SearchUrisResponseThreatUri from a JSON string
google_cloud_webrisk_v1_search_uris_response_threat_uri_instance = GoogleCloudWebriskV1SearchUrisResponseThreatUri.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1SearchUrisResponseThreatUri.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_search_uris_response_threat_uri_dict = google_cloud_webrisk_v1_search_uris_response_threat_uri_instance.to_dict()
# create an instance of GoogleCloudWebriskV1SearchUrisResponseThreatUri from a dict
google_cloud_webrisk_v1_search_uris_response_threat_uri_from_dict = GoogleCloudWebriskV1SearchUrisResponseThreatUri.from_dict(google_cloud_webrisk_v1_search_uris_response_threat_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


