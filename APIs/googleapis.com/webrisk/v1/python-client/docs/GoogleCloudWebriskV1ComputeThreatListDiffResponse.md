# GoogleCloudWebriskV1ComputeThreatListDiffResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additions** | [**GoogleCloudWebriskV1ThreatEntryAdditions**](GoogleCloudWebriskV1ThreatEntryAdditions.md) |  | [optional] 
**checksum** | [**GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum**](GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum.md) |  | [optional] 
**new_version_token** | **bytearray** | The new opaque client version token. This should be retained by the client and passed into the next call of ComputeThreatListDiff as &#39;version_token&#39;. A separate version token should be stored and used for each threatList. | [optional] 
**recommended_next_diff** | **str** | The soonest the client should wait before issuing any diff request. Querying sooner is unlikely to produce a meaningful diff. Waiting longer is acceptable considering the use case. If this field is not set clients may update as soon as they want. | [optional] 
**removals** | [**GoogleCloudWebriskV1ThreatEntryRemovals**](GoogleCloudWebriskV1ThreatEntryRemovals.md) |  | [optional] 
**response_type** | **str** | The type of response. This may indicate that an action must be taken by the client when the response is received. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_compute_threat_list_diff_response import GoogleCloudWebriskV1ComputeThreatListDiffResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1ComputeThreatListDiffResponse from a JSON string
google_cloud_webrisk_v1_compute_threat_list_diff_response_instance = GoogleCloudWebriskV1ComputeThreatListDiffResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1ComputeThreatListDiffResponse.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_compute_threat_list_diff_response_dict = google_cloud_webrisk_v1_compute_threat_list_diff_response_instance.to_dict()
# create an instance of GoogleCloudWebriskV1ComputeThreatListDiffResponse from a dict
google_cloud_webrisk_v1_compute_threat_list_diff_response_from_dict = GoogleCloudWebriskV1ComputeThreatListDiffResponse.from_dict(google_cloud_webrisk_v1_compute_threat_list_diff_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


