# BareMetalVersionInfo

Contains information about a specific Anthos on bare metal version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dependencies** | [**List[UpgradeDependency]**](UpgradeDependency.md) | The list of upgrade dependencies for this version. | [optional] 
**has_dependencies** | **bool** | If set, the cluster dependencies (e.g. the admin cluster, other user clusters managed by the same admin cluster, version skew policy, etc) must be upgraded before this version can be installed or upgraded to. | [optional] 
**version** | **str** | Version number e.g. 1.13.1. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_version_info import BareMetalVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalVersionInfo from a JSON string
bare_metal_version_info_instance = BareMetalVersionInfo.from_json(json)
# print the JSON string representation of the object
print(BareMetalVersionInfo.to_json())

# convert the object into a dict
bare_metal_version_info_dict = bare_metal_version_info_instance.to_dict()
# create an instance of BareMetalVersionInfo from a dict
bare_metal_version_info_from_dict = BareMetalVersionInfo.from_dict(bare_metal_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


