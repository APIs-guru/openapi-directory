# GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate

A template that specifies runtime configurations such as machine type, runtime version, network configurations, etc. Multiple runtimes can be created from a runtime template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when this NotebookRuntimeTemplate was created. | [optional] [readonly] 
**data_persistent_disk_spec** | [**GoogleCloudAiplatformV1beta1PersistentDiskSpec**](GoogleCloudAiplatformV1beta1PersistentDiskSpec.md) |  | [optional] 
**description** | **str** | The description of the NotebookRuntimeTemplate. | [optional] 
**display_name** | **str** | Required. The display name of the NotebookRuntimeTemplate. The name can be up to 128 characters long and can consist of any UTF-8 characters. | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**euc_config** | [**GoogleCloudAiplatformV1beta1NotebookEucConfig**](GoogleCloudAiplatformV1beta1NotebookEucConfig.md) |  | [optional] 
**idle_shutdown_config** | [**GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig**](GoogleCloudAiplatformV1beta1NotebookIdleShutdownConfig.md) |  | [optional] 
**is_default** | **bool** | Output only. The default template to use if not specified. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to organize the NotebookRuntimeTemplates. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels. | [optional] 
**machine_spec** | [**GoogleCloudAiplatformV1beta1MachineSpec**](GoogleCloudAiplatformV1beta1MachineSpec.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the NotebookRuntimeTemplate. | [optional] [readonly] 
**network_spec** | [**GoogleCloudAiplatformV1beta1NetworkSpec**](GoogleCloudAiplatformV1beta1NetworkSpec.md) |  | [optional] 
**network_tags** | **List[str]** | Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/vpc/docs/add-remove-network-tags)). | [optional] 
**notebook_runtime_type** | **str** | Optional. Immutable. The type of the notebook runtime template. | [optional] 
**reservation_affinity** | [**GoogleCloudAiplatformV1beta1NotebookReservationAffinity**](GoogleCloudAiplatformV1beta1NotebookReservationAffinity.md) |  | [optional] 
**service_account** | **str** | The service account that the runtime workload runs as. You can use any service account within the same project, but you must have the service account user permission to use the instance. If not specified, the [Compute Engine default service account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account) is used. | [optional] 
**shielded_vm_config** | [**GoogleCloudAiplatformV1beta1ShieldedVmConfig**](GoogleCloudAiplatformV1beta1ShieldedVmConfig.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when this NotebookRuntimeTemplate was most recently updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_notebook_runtime_template import GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate from a JSON string
google_cloud_aiplatform_v1beta1_notebook_runtime_template_instance = GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_notebook_runtime_template_dict = google_cloud_aiplatform_v1beta1_notebook_runtime_template_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate from a dict
google_cloud_aiplatform_v1beta1_notebook_runtime_template_from_dict = GoogleCloudAiplatformV1beta1NotebookRuntimeTemplate.from_dict(google_cloud_aiplatform_v1beta1_notebook_runtime_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


