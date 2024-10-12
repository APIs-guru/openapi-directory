# GoogleCloudMlV1ReplicaConfig

Represents the configuration for a replica in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_config** | [**GoogleCloudMlV1AcceleratorConfig**](GoogleCloudMlV1AcceleratorConfig.md) |  | [optional] 
**container_args** | **List[str]** | Arguments to the entrypoint command. The following rules apply for container_command and container_args: - If you do not supply command or args: The defaults defined in the Docker image are used. - If you supply a command but no args: The default EntryPoint and the default Cmd defined in the Docker image are ignored. Your command is run without any arguments. - If you supply only args: The default Entrypoint defined in the Docker image is run with the args that you supplied. - If you supply a command and args: The default Entrypoint and the default Cmd defined in the Docker image are ignored. Your command is run with your args. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time. | [optional] 
**container_command** | **List[str]** | The command with which the replica&#39;s custom container is run. If provided, it will override default ENTRYPOINT of the docker image. If not provided, the docker image&#39;s ENTRYPOINT is used. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time. | [optional] 
**disk_config** | [**GoogleCloudMlV1DiskConfig**](GoogleCloudMlV1DiskConfig.md) |  | [optional] 
**image_uri** | **str** | The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers). | [optional] 
**tpu_tf_version** | **str** | The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support). Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow &#x60;1.x.y&#x60;, specify &#x60;1.x&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_replica_config import GoogleCloudMlV1ReplicaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ReplicaConfig from a JSON string
google_cloud_ml_v1_replica_config_instance = GoogleCloudMlV1ReplicaConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ReplicaConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_replica_config_dict = google_cloud_ml_v1_replica_config_instance.to_dict()
# create an instance of GoogleCloudMlV1ReplicaConfig from a dict
google_cloud_ml_v1_replica_config_from_dict = GoogleCloudMlV1ReplicaConfig.from_dict(google_cloud_ml_v1_replica_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


