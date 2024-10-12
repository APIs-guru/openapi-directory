# GoogleCloudApigeeV1Score

Represents Security Score.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component** | [**GoogleCloudApigeeV1ScoreComponent**](GoogleCloudApigeeV1ScoreComponent.md) |  | [optional] 
**subcomponents** | [**List[GoogleCloudApigeeV1ScoreComponent]**](GoogleCloudApigeeV1ScoreComponent.md) | List of all the drilldown score components. | [optional] 
**time_range** | [**GoogleTypeInterval**](GoogleTypeInterval.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_score import GoogleCloudApigeeV1Score

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Score from a JSON string
google_cloud_apigee_v1_score_instance = GoogleCloudApigeeV1Score.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Score.to_json())

# convert the object into a dict
google_cloud_apigee_v1_score_dict = google_cloud_apigee_v1_score_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Score from a dict
google_cloud_apigee_v1_score_from_dict = GoogleCloudApigeeV1Score.from_dict(google_cloud_apigee_v1_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


