# GoogleCloudMlV1Model

Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_version** | [**GoogleCloudMlV1Version**](GoogleCloudMlV1Version.md) |  | [optional] 
**description** | **str** | Optional. The description specified for the model when it was created. | [optional] 
**etag** | **bytearray** | &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform model updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response to &#x60;GetModel&#x60;, and systems are expected to put that etag in the request to &#x60;UpdateModel&#x60; to ensure that their change will be applied to the model as intended. | [optional] 
**labels** | **Dict[str, str]** | Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models. | [optional] 
**name** | **str** | Required. The name specified for the model when it was created. The model name must be unique within the project it is created in. | [optional] 
**online_prediction_console_logging** | **bool** | Optional. If true, online prediction nodes send &#x60;stderr&#x60; and &#x60;stdout&#x60; streams to Cloud Logging. These can be more verbose than the standard access logs (see &#x60;onlinePredictionLogging&#x60;) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false. | [optional] 
**online_prediction_logging** | **bool** | Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false. | [optional] 
**regions** | **List[str]** | Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to &#39;us-central1&#39; if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_model import GoogleCloudMlV1Model

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Model from a JSON string
google_cloud_ml_v1_model_instance = GoogleCloudMlV1Model.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Model.to_json())

# convert the object into a dict
google_cloud_ml_v1_model_dict = google_cloud_ml_v1_model_instance.to_dict()
# create an instance of GoogleCloudMlV1Model from a dict
google_cloud_ml_v1_model_from_dict = GoogleCloudMlV1Model.from_dict(google_cloud_ml_v1_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


