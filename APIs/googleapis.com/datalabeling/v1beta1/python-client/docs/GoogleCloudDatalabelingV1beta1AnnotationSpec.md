# GoogleCloudDatalabelingV1beta1AnnotationSpec

Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. User-provided description of the annotation specification. The description can be up to 10,000 characters long. | [optional] 
**display_name** | **str** | Required. The display name of the AnnotationSpec. Maximum of 64 characters. | [optional] 
**index** | **int** | Output only. This is the integer index of the AnnotationSpec. The index for the whole AnnotationSpecSet is sequential starting from 0. For example, an AnnotationSpecSet with classes &#x60;dog&#x60; and &#x60;cat&#x60;, might contain one AnnotationSpec with &#x60;{ display_name: \&quot;dog\&quot;, index: 0 }&#x60; and one AnnotationSpec with &#x60;{ display_name: \&quot;cat\&quot;, index: 1 }&#x60;. This is especially useful for model training as it encodes the string labels into numeric values. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_annotation_spec import GoogleCloudDatalabelingV1beta1AnnotationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationSpec from a JSON string
google_cloud_datalabeling_v1beta1_annotation_spec_instance = GoogleCloudDatalabelingV1beta1AnnotationSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1AnnotationSpec.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_annotation_spec_dict = google_cloud_datalabeling_v1beta1_annotation_spec_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1AnnotationSpec from a dict
google_cloud_datalabeling_v1beta1_annotation_spec_from_dict = GoogleCloudDatalabelingV1beta1AnnotationSpec.from_dict(google_cloud_datalabeling_v1beta1_annotation_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


