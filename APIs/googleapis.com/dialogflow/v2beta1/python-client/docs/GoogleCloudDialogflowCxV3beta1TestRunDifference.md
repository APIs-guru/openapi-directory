# GoogleCloudDialogflowCxV3beta1TestRunDifference

The description of differences between original and replayed agent output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A human readable description of the diff, showing the actual output vs expected output. | [optional] 
**type** | **str** | The type of diff. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_test_run_difference import GoogleCloudDialogflowCxV3beta1TestRunDifference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1TestRunDifference from a JSON string
google_cloud_dialogflow_cx_v3beta1_test_run_difference_instance = GoogleCloudDialogflowCxV3beta1TestRunDifference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1TestRunDifference.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_test_run_difference_dict = google_cloud_dialogflow_cx_v3beta1_test_run_difference_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1TestRunDifference from a dict
google_cloud_dialogflow_cx_v3beta1_test_run_difference_from_dict = GoogleCloudDialogflowCxV3beta1TestRunDifference.from_dict(google_cloud_dialogflow_cx_v3beta1_test_run_difference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


