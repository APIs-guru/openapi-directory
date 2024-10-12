# GoogleCloudWebriskV1SearchHashesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_expire_time** | **str** | For requested entities that did not match the threat list, how long to cache the response until. | [optional] 
**threats** | [**List[GoogleCloudWebriskV1SearchHashesResponseThreatHash]**](GoogleCloudWebriskV1SearchHashesResponseThreatHash.md) | The full hashes that matched the requested prefixes. The hash will be populated in the key. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_search_hashes_response import GoogleCloudWebriskV1SearchHashesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1SearchHashesResponse from a JSON string
google_cloud_webrisk_v1_search_hashes_response_instance = GoogleCloudWebriskV1SearchHashesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1SearchHashesResponse.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_search_hashes_response_dict = google_cloud_webrisk_v1_search_hashes_response_instance.to_dict()
# create an instance of GoogleCloudWebriskV1SearchHashesResponse from a dict
google_cloud_webrisk_v1_search_hashes_response_from_dict = GoogleCloudWebriskV1SearchHashesResponse.from_dict(google_cloud_webrisk_v1_search_hashes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


