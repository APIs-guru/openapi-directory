# GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig

Configuration for how human labeling task should be done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset_description** | **str** | Optional. A human-readable description for AnnotatedDataset. The description can be up to 10000 characters long. | [optional] 
**annotated_dataset_display_name** | **str** | Required. A human-readable name for AnnotatedDataset defined by users. Maximum of 64 characters . | [optional] 
**contributor_emails** | **List[str]** | Optional. If you want your own labeling contributors to manage and work on this labeling request, you can set these contributors here. We will give them access to the question types in crowdcompute. Note that these emails must be registered in crowdcompute worker UI: https://crowd-compute.appspot.com/ | [optional] 
**instruction** | **str** | Required. Instruction resource name. | [optional] 
**label_group** | **str** | Optional. A human-readable label used to logically group labeling tasks. This string must match the regular expression &#x60;[a-zA-Z\\\\d_-]{0,128}&#x60;. | [optional] 
**language_code** | **str** | Optional. The Language of this question, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. Only need to set this when task is language related. For example, French text classification. | [optional] 
**question_duration** | **str** | Optional. Maximum duration for contributors to answer a question. Maximum is 3600 seconds. Default is 3600 seconds. | [optional] 
**replica_count** | **int** | Optional. Replication of questions. Each question will be sent to up to this number of contributors to label. Aggregated answers will be returned. Default is set to 1. For image related labeling, valid values are 1, 3, 5. | [optional] 
**user_email_address** | **str** | Email of the user who started the labeling task and should be notified by email. If empty no notification will be sent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1p2alpha1_human_annotation_config import GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig from a JSON string
google_cloud_datalabeling_v1p2alpha1_human_annotation_config_instance = GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1p2alpha1_human_annotation_config_dict = google_cloud_datalabeling_v1p2alpha1_human_annotation_config_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig from a dict
google_cloud_datalabeling_v1p2alpha1_human_annotation_config_from_dict = GoogleCloudDatalabelingV1p2alpha1HumanAnnotationConfig.from_dict(google_cloud_datalabeling_v1p2alpha1_human_annotation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


