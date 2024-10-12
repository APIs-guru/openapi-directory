# ControllerProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_plane_fqdn** | **str** | DNS name for accessing DataPlane services | [optional] [readonly] 
**host_suffix** | **str** | DNS suffix for public endpoints running in the Azure Dev Spaces Controller. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the Azure Dev Spaces Controller. | [optional] [readonly] 
**target_container_host_credentials_base64** | **str** | Credentials of the target container host (base64). | 
**target_container_host_resource_id** | **str** | Resource ID of the target container host | 

## Example

```python
from openapi_client.models.controller_properties import ControllerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ControllerProperties from a JSON string
controller_properties_instance = ControllerProperties.from_json(json)
# print the JSON string representation of the object
print(ControllerProperties.to_json())

# convert the object into a dict
controller_properties_dict = controller_properties_instance.to_dict()
# create an instance of ControllerProperties from a dict
controller_properties_from_dict = ControllerProperties.from_dict(controller_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


