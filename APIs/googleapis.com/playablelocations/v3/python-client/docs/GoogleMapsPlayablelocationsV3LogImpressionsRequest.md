# GoogleMapsPlayablelocationsV3LogImpressionsRequest

A request for logging impressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_info** | [**GoogleMapsUnityClientInfo**](GoogleMapsUnityClientInfo.md) |  | [optional] 
**impressions** | [**List[GoogleMapsPlayablelocationsV3Impression]**](GoogleMapsPlayablelocationsV3Impression.md) | Required. Impression event details. The maximum number of impression reports that you can log at once is 50. | [optional] 
**request_id** | **str** | Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the &#x60;request_id&#x60; only when retrying a request in case of failure. In this case, the request must be identical to the one that failed. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_log_impressions_request import GoogleMapsPlayablelocationsV3LogImpressionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3LogImpressionsRequest from a JSON string
google_maps_playablelocations_v3_log_impressions_request_instance = GoogleMapsPlayablelocationsV3LogImpressionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3LogImpressionsRequest.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_log_impressions_request_dict = google_maps_playablelocations_v3_log_impressions_request_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3LogImpressionsRequest from a dict
google_maps_playablelocations_v3_log_impressions_request_from_dict = GoogleMapsPlayablelocationsV3LogImpressionsRequest.from_dict(google_maps_playablelocations_v3_log_impressions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


