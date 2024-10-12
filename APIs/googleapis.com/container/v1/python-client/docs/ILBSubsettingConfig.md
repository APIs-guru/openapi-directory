# ILBSubsettingConfig

ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables l4 ILB subsetting for this cluster. | [optional] 

## Example

```python
from openapi_client.models.ilb_subsetting_config import ILBSubsettingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ILBSubsettingConfig from a JSON string
ilb_subsetting_config_instance = ILBSubsettingConfig.from_json(json)
# print the JSON string representation of the object
print(ILBSubsettingConfig.to_json())

# convert the object into a dict
ilb_subsetting_config_dict = ilb_subsetting_config_instance.to_dict()
# create an instance of ILBSubsettingConfig from a dict
ilb_subsetting_config_from_dict = ILBSubsettingConfig.from_dict(ilb_subsetting_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


