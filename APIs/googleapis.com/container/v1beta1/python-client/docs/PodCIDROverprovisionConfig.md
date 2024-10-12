# PodCIDROverprovisionConfig

[PRIVATE FIELD] Config for pod CIDR size overprovisioning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable** | **bool** | Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default. | [optional] 

## Example

```python
from openapi_client.models.pod_cidr_overprovision_config import PodCIDROverprovisionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PodCIDROverprovisionConfig from a JSON string
pod_cidr_overprovision_config_instance = PodCIDROverprovisionConfig.from_json(json)
# print the JSON string representation of the object
print(PodCIDROverprovisionConfig.to_json())

# convert the object into a dict
pod_cidr_overprovision_config_dict = pod_cidr_overprovision_config_instance.to_dict()
# create an instance of PodCIDROverprovisionConfig from a dict
pod_cidr_overprovision_config_from_dict = PodCIDROverprovisionConfig.from_dict(pod_cidr_overprovision_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


