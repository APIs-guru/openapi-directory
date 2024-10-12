# GoogleCloudAiplatformV1NotebookRuntime

A runtime is a virtual machine allocated to a particular user for a particular Notebook file on temporary basis with lifetime limited to 24 hours.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this NotebookRuntime was created. | [optional] [readonly] 
**description** | **str** | The description of the NotebookRuntime. | [optional] 
**display_name** | **str** | Required. The display name of the NotebookRuntime. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**expiration_time** | **str** | Output only. Timestamp when this NotebookRuntime will be expired: 1. System Predefined NotebookRuntime: 24 hours after creation. After expiration, system predifined runtime will be deleted. 2. User created NotebookRuntime: 6 months after last upgrade. After expiration, user created runtime will be stopped and allowed for upgrade. | [optional] [readonly] 
**health_state** | **str** | Output only. The health state of the NotebookRuntime. | [optional] [readonly] 
**is_upgradable** | **bool** | Output only. Whether NotebookRuntime is upgradable. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize your NotebookRuntime. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one NotebookRuntime (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. Following system labels exist for NotebookRuntime: * \&quot;aiplatform.googleapis.com/notebook_runtime_gce_instance_id\&quot;: output only, its value is the Compute Engine instance id. * \&quot;aiplatform.googleapis.com/colab_enterprise_entry_service\&quot;: its value is either \&quot;bigquery\&quot; or \&quot;vertex\&quot;; if absent, it should be \&quot;vertex\&quot;. This is to describe the entry service, either BigQuery or Vertex. | [optional] 
**name** | **str** | Output only. The resource name of the NotebookRuntime. | [optional] [readonly] 
**network_tags** | **List[str]** | Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/vpc/docs/add-remove-network-tags)). | [optional] 
**notebook_runtime_template_ref** | [**GoogleCloudAiplatformV1NotebookRuntimeTemplateRef**](GoogleCloudAiplatformV1NotebookRuntimeTemplateRef.md) |  | [optional] 
**notebook_runtime_type** | **str** | Output only. The type of the notebook runtime. | [optional] [readonly] 
**proxy_uri** | **str** | Output only. The proxy endpoint used to access the NotebookRuntime. | [optional] [readonly] 
**reservation_affinity** | [**GoogleCloudAiplatformV1NotebookReservationAffinity**](GoogleCloudAiplatformV1NotebookReservationAffinity.md) |  | [optional] 
**runtime_state** | **str** | Output only. The runtime (instance) state of the NotebookRuntime. | [optional] [readonly] 
**runtime_user** | **str** | Required. The user email of the NotebookRuntime. | [optional] 
**service_account** | **str** | Output only. The service account that the NotebookRuntime workload runs as. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this NotebookRuntime was most recently updated. | [optional] [readonly] 
**version** | **str** | Output only. The VM os image version of NotebookRuntime. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_notebook_runtime import GoogleCloudAiplatformV1NotebookRuntime

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NotebookRuntime from a JSON string
google_cloud_aiplatform_v1_notebook_runtime_instance = GoogleCloudAiplatformV1NotebookRuntime.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NotebookRuntime.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_notebook_runtime_dict = google_cloud_aiplatform_v1_notebook_runtime_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NotebookRuntime from a dict
google_cloud_aiplatform_v1_notebook_runtime_from_dict = GoogleCloudAiplatformV1NotebookRuntime.from_dict(google_cloud_aiplatform_v1_notebook_runtime_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


