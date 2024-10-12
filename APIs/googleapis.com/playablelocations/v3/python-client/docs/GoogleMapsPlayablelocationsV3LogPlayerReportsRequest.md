# GoogleMapsPlayablelocationsV3LogPlayerReportsRequest

A request for logging your player's bad location reports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_info** | [**GoogleMapsUnityClientInfo**](GoogleMapsUnityClientInfo.md) |  | [optional] 
**player_reports** | [**List[GoogleMapsPlayablelocationsV3PlayerReport]**](GoogleMapsPlayablelocationsV3PlayerReport.md) | Required. Player reports. The maximum number of player reports that you can log at once is 50. | [optional] 
**request_id** | **str** | Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the &#x60;request_id&#x60; only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed. | [optional] 

## Example

```python
from openapi_client.models.google_maps_playablelocations_v3_log_player_reports_request import GoogleMapsPlayablelocationsV3LogPlayerReportsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleMapsPlayablelocationsV3LogPlayerReportsRequest from a JSON string
google_maps_playablelocations_v3_log_player_reports_request_instance = GoogleMapsPlayablelocationsV3LogPlayerReportsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleMapsPlayablelocationsV3LogPlayerReportsRequest.to_json())

# convert the object into a dict
google_maps_playablelocations_v3_log_player_reports_request_dict = google_maps_playablelocations_v3_log_player_reports_request_instance.to_dict()
# create an instance of GoogleMapsPlayablelocationsV3LogPlayerReportsRequest from a dict
google_maps_playablelocations_v3_log_player_reports_request_from_dict = GoogleMapsPlayablelocationsV3LogPlayerReportsRequest.from_dict(google_maps_playablelocations_v3_log_player_reports_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


