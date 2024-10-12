# BareMetalAdminNodeAccessConfig

Specifies the node access related settings for the bare metal admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_user** | **str** | Required. LoginUser is the user name used to access node machines. It defaults to \&quot;root\&quot; if not set. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_node_access_config import BareMetalAdminNodeAccessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminNodeAccessConfig from a JSON string
bare_metal_admin_node_access_config_instance = BareMetalAdminNodeAccessConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminNodeAccessConfig.to_json())

# convert the object into a dict
bare_metal_admin_node_access_config_dict = bare_metal_admin_node_access_config_instance.to_dict()
# create an instance of BareMetalAdminNodeAccessConfig from a dict
bare_metal_admin_node_access_config_from_dict = BareMetalAdminNodeAccessConfig.from_dict(bare_metal_admin_node_access_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


