# GoogleCloudMlV1ListTrialsResponse

The response message for the ListTrials method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trials** | [**List[GoogleCloudMlV1Trial]**](GoogleCloudMlV1Trial.md) | The trials associated with the study. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_trials_response import GoogleCloudMlV1ListTrialsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListTrialsResponse from a JSON string
google_cloud_ml_v1_list_trials_response_instance = GoogleCloudMlV1ListTrialsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListTrialsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_trials_response_dict = google_cloud_ml_v1_list_trials_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListTrialsResponse from a dict
google_cloud_ml_v1_list_trials_response_from_dict = GoogleCloudMlV1ListTrialsResponse.from_dict(google_cloud_ml_v1_list_trials_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


