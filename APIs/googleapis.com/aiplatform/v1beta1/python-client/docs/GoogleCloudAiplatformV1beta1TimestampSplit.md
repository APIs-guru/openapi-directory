# GoogleCloudAiplatformV1beta1TimestampSplit

Assigns input data to training, validation, and test sets based on a provided timestamps. The youngest data pieces are assigned to training set, next to validation set, and the oldest to the test set. Supported only for tabular Datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The key is a name of one of the Dataset&#39;s data columns. The values of the key (the values in the column) must be in RFC 3339 &#x60;date-time&#x60; format, where &#x60;time-offset&#x60; &#x3D; &#x60;\&quot;Z\&quot;&#x60; (e.g. 1985-04-12T23:20:50.52Z). If for a piece of data the key is not present or has an invalid value, that piece is ignored by the pipeline. | [optional] 
**test_fraction** | **float** | The fraction of the input data that is to be used to evaluate the Model. | [optional] 
**training_fraction** | **float** | The fraction of the input data that is to be used to train the Model. | [optional] 
**validation_fraction** | **float** | The fraction of the input data that is to be used to validate the Model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_timestamp_split import GoogleCloudAiplatformV1beta1TimestampSplit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1TimestampSplit from a JSON string
google_cloud_aiplatform_v1beta1_timestamp_split_instance = GoogleCloudAiplatformV1beta1TimestampSplit.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1TimestampSplit.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_timestamp_split_dict = google_cloud_aiplatform_v1beta1_timestamp_split_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1TimestampSplit from a dict
google_cloud_aiplatform_v1beta1_timestamp_split_from_dict = GoogleCloudAiplatformV1beta1TimestampSplit.from_dict(google_cloud_aiplatform_v1beta1_timestamp_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


