# BareMetalAdminIslandModeCidrConfig

BareMetalAdminIslandModeCidrConfig specifies the cluster CIDR configuration while running in island mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pod_address_cidr_blocks** | **List[str]** | Required. All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. | [optional] 
**service_address_cidr_blocks** | **List[str]** | Required. All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_island_mode_cidr_config import BareMetalAdminIslandModeCidrConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminIslandModeCidrConfig from a JSON string
bare_metal_admin_island_mode_cidr_config_instance = BareMetalAdminIslandModeCidrConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminIslandModeCidrConfig.to_json())

# convert the object into a dict
bare_metal_admin_island_mode_cidr_config_dict = bare_metal_admin_island_mode_cidr_config_instance.to_dict()
# create an instance of BareMetalAdminIslandModeCidrConfig from a dict
bare_metal_admin_island_mode_cidr_config_from_dict = BareMetalAdminIslandModeCidrConfig.from_dict(bare_metal_admin_island_mode_cidr_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


