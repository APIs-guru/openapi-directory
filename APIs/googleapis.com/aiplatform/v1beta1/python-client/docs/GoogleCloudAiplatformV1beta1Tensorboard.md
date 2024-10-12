# GoogleCloudAiplatformV1beta1Tensorboard

Tensorboard is a physical database that stores users' training metrics. A default Tensorboard is provided in each region of a Google Cloud project. If needed users can also create extra Tensorboards in their projects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_storage_path_prefix** | **str** | Output only. Consumer project Cloud Storage path prefix used to store blob data, which can either be a bucket or directory. Does not end with a &#39;/&#39;. | [optional] [readonly] 
**create_time** | **str** | Output only. Timestamp when this Tensorboard was created. | [optional] [readonly] 
**description** | **str** | Description of this Tensorboard. | [optional] 
**display_name** | **str** | Required. User provided name of this Tensorboard. | [optional] 
**encryption_spec** | [**GoogleCloudAiplatformV1beta1EncryptionSpec**](GoogleCloudAiplatformV1beta1EncryptionSpec.md) |  | [optional] 
**etag** | **str** | Used to perform a consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**is_default** | **bool** | Used to indicate if the TensorBoard instance is the default one. Each project &amp; region can have at most one default TensorBoard instance. Creation of a default TensorBoard instance and updating an existing TensorBoard instance to be default will mark all other TensorBoard instances (if any) as non default. | [optional] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your Tensorboards. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Tensorboard (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**name** | **str** | Output only. Name of the Tensorboard. Format: &#x60;projects/{project}/locations/{location}/tensorboards/{tensorboard}&#x60; | [optional] [readonly] 
**run_count** | **int** | Output only. The number of Runs stored in this Tensorboard. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this Tensorboard was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_tensorboard import GoogleCloudAiplatformV1beta1Tensorboard

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Tensorboard from a JSON string
google_cloud_aiplatform_v1beta1_tensorboard_instance = GoogleCloudAiplatformV1beta1Tensorboard.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Tensorboard.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_tensorboard_dict = google_cloud_aiplatform_v1beta1_tensorboard_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Tensorboard from a dict
google_cloud_aiplatform_v1beta1_tensorboard_from_dict = GoogleCloudAiplatformV1beta1Tensorboard.from_dict(google_cloud_aiplatform_v1beta1_tensorboard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


