# ConfigManagementBinauthzState

State for Binauthz

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | [**ConfigManagementBinauthzVersion**](ConfigManagementBinauthzVersion.md) |  | [optional] 
**webhook** | **str** | The state of the binauthz webhook. | [optional] 

## Example

```python
from openapi_client.models.config_management_binauthz_state import ConfigManagementBinauthzState

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementBinauthzState from a JSON string
config_management_binauthz_state_instance = ConfigManagementBinauthzState.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementBinauthzState.to_json())

# convert the object into a dict
config_management_binauthz_state_dict = config_management_binauthz_state_instance.to_dict()
# create an instance of ConfigManagementBinauthzState from a dict
config_management_binauthz_state_from_dict = ConfigManagementBinauthzState.from_dict(config_management_binauthz_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


