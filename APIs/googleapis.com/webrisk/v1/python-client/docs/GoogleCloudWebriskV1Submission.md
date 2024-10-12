# GoogleCloudWebriskV1Submission

Wraps a URI that might be displaying malicious content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The URI that is being reported for malicious content to be analyzed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_submission import GoogleCloudWebriskV1Submission

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1Submission from a JSON string
google_cloud_webrisk_v1_submission_instance = GoogleCloudWebriskV1Submission.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1Submission.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_submission_dict = google_cloud_webrisk_v1_submission_instance.to_dict()
# create an instance of GoogleCloudWebriskV1Submission from a dict
google_cloud_webrisk_v1_submission_from_dict = GoogleCloudWebriskV1Submission.from_dict(google_cloud_webrisk_v1_submission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


