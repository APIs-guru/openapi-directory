# BareMetalSrIovConfig

Specifies the SR-IOV networking operator config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to install the SR-IOV operator. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_sr_iov_config import BareMetalSrIovConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalSrIovConfig from a JSON string
bare_metal_sr_iov_config_instance = BareMetalSrIovConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalSrIovConfig.to_json())

# convert the object into a dict
bare_metal_sr_iov_config_dict = bare_metal_sr_iov_config_instance.to_dict()
# create an instance of BareMetalSrIovConfig from a dict
bare_metal_sr_iov_config_from_dict = BareMetalSrIovConfig.from_dict(bare_metal_sr_iov_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


