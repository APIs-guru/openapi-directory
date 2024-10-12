# GoogleCloudMlV1AcceleratorConfig

Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of accelerators to attach to each machine running the job. | [optional] 
**type** | **str** | The type of accelerator to use. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_accelerator_config import GoogleCloudMlV1AcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1AcceleratorConfig from a JSON string
google_cloud_ml_v1_accelerator_config_instance = GoogleCloudMlV1AcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1AcceleratorConfig.to_json())

# convert the object into a dict
google_cloud_ml_v1_accelerator_config_dict = google_cloud_ml_v1_accelerator_config_instance.to_dict()
# create an instance of GoogleCloudMlV1AcceleratorConfig from a dict
google_cloud_ml_v1_accelerator_config_from_dict = GoogleCloudMlV1AcceleratorConfig.from_dict(google_cloud_ml_v1_accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


