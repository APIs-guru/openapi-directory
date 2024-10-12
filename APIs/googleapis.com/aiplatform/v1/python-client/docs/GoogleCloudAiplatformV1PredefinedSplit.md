# GoogleCloudAiplatformV1PredefinedSplit

Assigns input data to training, validation, and test sets based on the value of a provided key. Supported only for tabular Datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The key is a name of one of the Dataset&#39;s data columns. The value of the key (either the label&#39;s value or value in the column) must be one of {&#x60;training&#x60;, &#x60;validation&#x60;, &#x60;test&#x60;}, and it defines to which set the given piece of data is assigned. If for a piece of data the key is not present or has an invalid value, that piece is ignored by the pipeline. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_predefined_split import GoogleCloudAiplatformV1PredefinedSplit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PredefinedSplit from a JSON string
google_cloud_aiplatform_v1_predefined_split_instance = GoogleCloudAiplatformV1PredefinedSplit.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PredefinedSplit.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_predefined_split_dict = google_cloud_aiplatform_v1_predefined_split_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PredefinedSplit from a dict
google_cloud_aiplatform_v1_predefined_split_from_dict = GoogleCloudAiplatformV1PredefinedSplit.from_dict(google_cloud_aiplatform_v1_predefined_split_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


