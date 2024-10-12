# GoogleCloudAiplatformV1MachineSpec

Specification of a single machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_count** | **int** | The number of accelerators to attach to the machine. | [optional] 
**accelerator_type** | **str** | Immutable. The type of accelerator(s) that may be attached to the machine as per accelerator_count. | [optional] 
**machine_type** | **str** | Immutable. The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types) See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types). For DeployedModel this field is optional, and the default value is &#x60;n1-standard-2&#x60;. For BatchPredictionJob or as part of WorkerPoolSpec this field is required. | [optional] 
**tpu_topology** | **str** | Immutable. The topology of the TPUs. Corresponds to the TPU topologies available from GKE. (Example: tpu_topology: \&quot;2x2x1\&quot;). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_machine_spec import GoogleCloudAiplatformV1MachineSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MachineSpec from a JSON string
google_cloud_aiplatform_v1_machine_spec_instance = GoogleCloudAiplatformV1MachineSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MachineSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_machine_spec_dict = google_cloud_aiplatform_v1_machine_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MachineSpec from a dict
google_cloud_aiplatform_v1_machine_spec_from_dict = GoogleCloudAiplatformV1MachineSpec.from_dict(google_cloud_aiplatform_v1_machine_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


