# AcceleratorConfig

Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_count** | **int** | The number of the accelerator cards of this type exposed to this instance. | [optional] 
**accelerator_type_uri** | **str** | Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-k80 nvidia-tesla-k80Auto Zone Exception: If you are using the Dataproc Auto Zone Placement (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-k80. | [optional] 

## Example

```python
from openapi_client.models.accelerator_config import AcceleratorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AcceleratorConfig from a JSON string
accelerator_config_instance = AcceleratorConfig.from_json(json)
# print the JSON string representation of the object
print(AcceleratorConfig.to_json())

# convert the object into a dict
accelerator_config_dict = accelerator_config_instance.to_dict()
# create an instance of AcceleratorConfig from a dict
accelerator_config_from_dict = AcceleratorConfig.from_dict(accelerator_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


