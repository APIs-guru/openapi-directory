# RuntimeSoftwareConfig

Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_gpu_driver_path** | **str** | Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we&#39;ll automatically choose from official GPU drivers. | [optional] 
**disable_terminal** | **bool** | Bool indicating whether JupyterLab terminal will be available or not. Default: False | [optional] 
**enable_health_monitoring** | **bool** | Verifies core internal services are running. Default: True | [optional] 
**idle_shutdown** | **bool** | Runtime will automatically shutdown after idle_shutdown_time. Default: True | [optional] 
**idle_shutdown_timeout** | **int** | Time in minutes to wait before shutting down runtime. Default: 180 minutes | [optional] 
**install_gpu_driver** | **bool** | Install Nvidia Driver automatically. Default: True | [optional] 
**kernels** | [**List[ContainerImage]**](ContainerImage.md) | Optional. Use a list of container images to use as Kernels in the notebook instance. | [optional] 
**mixer_disabled** | **bool** | Bool indicating whether mixer client should be disabled. Default: False | [optional] 
**notebook_upgrade_schedule** | **str** | Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). | [optional] 
**post_startup_script** | **str** | Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (&#x60;gs://path-to-file/file-name&#x60;). | [optional] 
**post_startup_script_behavior** | **str** | Behavior for the post startup script. | [optional] 
**upgradeable** | **bool** | Output only. Bool indicating whether an newer image is available in an image family. | [optional] [readonly] 
**version** | **str** | Output only. version of boot image such as M100, from release label of the image. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runtime_software_config import RuntimeSoftwareConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeSoftwareConfig from a JSON string
runtime_software_config_instance = RuntimeSoftwareConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeSoftwareConfig.to_json())

# convert the object into a dict
runtime_software_config_dict = runtime_software_config_instance.to_dict()
# create an instance of RuntimeSoftwareConfig from a dict
runtime_software_config_from_dict = RuntimeSoftwareConfig.from_dict(runtime_software_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


