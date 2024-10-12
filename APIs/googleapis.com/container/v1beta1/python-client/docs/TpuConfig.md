# TpuConfig

Configuration for Cloud TPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether Cloud TPU integration is enabled or not. | [optional] 
**ipv4_cidr_block** | **str** | IPv4 CIDR block reserved for Cloud TPU in the VPC. | [optional] 
**use_service_networking** | **bool** | Whether to use service networking for Cloud TPU or not. | [optional] 

## Example

```python
from openapi_client.models.tpu_config import TpuConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TpuConfig from a JSON string
tpu_config_instance = TpuConfig.from_json(json)
# print the JSON string representation of the object
print(TpuConfig.to_json())

# convert the object into a dict
tpu_config_dict = tpu_config_instance.to_dict()
# create an instance of TpuConfig from a dict
tpu_config_from_dict = TpuConfig.from_dict(tpu_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


