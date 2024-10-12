# ConfigManagementOperatorState

State information for an ACM's Operator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_state** | **str** | The state of the Operator&#39;s deployment | [optional] 
**errors** | [**List[ConfigManagementInstallError]**](ConfigManagementInstallError.md) | Install errors. | [optional] 
**version** | **str** | The semenatic version number of the operator | [optional] 

## Example

```python
from openapi_client.models.config_management_operator_state import ConfigManagementOperatorState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementOperatorState from a JSON string
config_management_operator_state_instance = ConfigManagementOperatorState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementOperatorState.to_json())

# convert the object into a dict
config_management_operator_state_dict = config_management_operator_state_instance.to_dict()
# create an instance of ConfigManagementOperatorState from a dict
config_management_operator_state_from_dict = ConfigManagementOperatorState.from_dict(config_management_operator_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


