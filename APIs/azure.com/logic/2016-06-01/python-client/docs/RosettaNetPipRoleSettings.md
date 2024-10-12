# RosettaNetPipRoleSettings

The integration account RosettaNet ProcessConfiguration role settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action name. | 
**business_document** | [**RosettaNetPipBusinessDocument**](RosettaNetPipBusinessDocument.md) |  | 
**description** | **str** | The description. | [optional] 
**role** | **str** | The role name. | 
**role_type** | [**RosettaNetPipRoleType**](RosettaNetPipRoleType.md) |  | 
**service** | **str** | The service name. | 
**service_classification** | **str** | The service classification name. | 

## Example

```python
from openapi_client.models.rosetta_net_pip_role_settings import RosettaNetPipRoleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RosettaNetPipRoleSettings from a JSON string
rosetta_net_pip_role_settings_instance = RosettaNetPipRoleSettings.from_json(json)
# print the JSON string representation of the object
print(RosettaNetPipRoleSettings.to_json())

# convert the object into a dict
rosetta_net_pip_role_settings_dict = rosetta_net_pip_role_settings_instance.to_dict()
# create an instance of RosettaNetPipRoleSettings from a dict
rosetta_net_pip_role_settings_from_dict = RosettaNetPipRoleSettings.from_dict(rosetta_net_pip_role_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


