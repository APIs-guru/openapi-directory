# GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse

Response with a list of anomalies in datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anomalies** | [**List[GooglePlayDeveloperReportingV1beta1Anomaly]**](GooglePlayDeveloperReportingV1beta1Anomaly.md) | Anomalies that were found. | [optional] 
**next_page_token** | **str** | Continuation token to fetch the next page of data. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_list_anomalies_response import GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse from a JSON string
google_play_developer_reporting_v1beta1_list_anomalies_response_instance = GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_list_anomalies_response_dict = google_play_developer_reporting_v1beta1_list_anomalies_response_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse from a dict
google_play_developer_reporting_v1beta1_list_anomalies_response_from_dict = GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse.from_dict(google_play_developer_reporting_v1beta1_list_anomalies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


