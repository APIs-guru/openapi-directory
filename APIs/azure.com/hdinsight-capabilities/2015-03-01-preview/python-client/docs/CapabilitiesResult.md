# CapabilitiesResult

The Get Capabilities operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | **List[str]** | The capabilty features. | [optional] 
**quota** | [**QuotaCapability**](QuotaCapability.md) |  | [optional] 
**regions** | [**Dict[str, RegionsCapability]**](RegionsCapability.md) | The virtual machine size compatibilty features. | [optional] 
**versions** | [**Dict[str, VersionsCapability]**](VersionsCapability.md) | The version capability. | [optional] 
**vm_size_filters** | [**List[VmSizeCompatibilityFilter]**](VmSizeCompatibilityFilter.md) | The virtual machine size compatibilty filters. | [optional] 
**vm_sizes** | [**Dict[str, VmSizesCapability]**](VmSizesCapability.md) | The virtual machine sizes. | [optional] 

## Example

```python
from openapi_client.models.capabilities_result import CapabilitiesResult

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilitiesResult from a JSON string
capabilities_result_instance = CapabilitiesResult.from_json(json)
# print the JSON string representation of the object
print(CapabilitiesResult.to_json())

# convert the object into a dict
capabilities_result_dict = capabilities_result_instance.to_dict()
# create an instance of CapabilitiesResult from a dict
capabilities_result_from_dict = CapabilitiesResult.from_dict(capabilities_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


