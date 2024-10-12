# GoogleFirebaseAppdistroV1alphaRoboStats

Statistics collected during a Robo test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_performed** | **int** | Output only. Number of actions that crawler performed. | [optional] [readonly] 
**crawl_duration** | **str** | Output only. Duration of crawl. | [optional] [readonly] 
**distinct_visited_screens** | **int** | Output only. Number of distinct screens visited. | [optional] [readonly] 
**main_activity_crawl_timed_out** | **bool** | Output only. Whether the main activity crawl timed out. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1alpha_robo_stats import GoogleFirebaseAppdistroV1alphaRoboStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1alphaRoboStats from a JSON string
google_firebase_appdistro_v1alpha_robo_stats_instance = GoogleFirebaseAppdistroV1alphaRoboStats.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1alphaRoboStats.to_json())

# convert the object into a dict
google_firebase_appdistro_v1alpha_robo_stats_dict = google_firebase_appdistro_v1alpha_robo_stats_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1alphaRoboStats from a dict
google_firebase_appdistro_v1alpha_robo_stats_from_dict = GoogleFirebaseAppdistroV1alphaRoboStats.from_dict(google_firebase_appdistro_v1alpha_robo_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


