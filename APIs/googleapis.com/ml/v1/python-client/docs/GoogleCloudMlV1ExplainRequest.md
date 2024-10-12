# GoogleCloudMlV1ExplainRequest

Request for explanations to be issued against a trained model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_body** | [**GoogleApiHttpBody**](GoogleApiHttpBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_explain_request import GoogleCloudMlV1ExplainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ExplainRequest from a JSON string
google_cloud_ml_v1_explain_request_instance = GoogleCloudMlV1ExplainRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ExplainRequest.to_json())

# convert the object into a dict
google_cloud_ml_v1_explain_request_dict = google_cloud_ml_v1_explain_request_instance.to_dict()
# create an instance of GoogleCloudMlV1ExplainRequest from a dict
google_cloud_ml_v1_explain_request_from_dict = GoogleCloudMlV1ExplainRequest.from_dict(google_cloud_ml_v1_explain_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


