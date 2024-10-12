# StateFamilyConfig

State family configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_read** | **bool** | If true, this family corresponds to a read operation. | [optional] 
**state_family** | **str** | The state family value. | [optional] 

## Example

```python
from openapi_client.models.state_family_config import StateFamilyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StateFamilyConfig from a JSON string
state_family_config_instance = StateFamilyConfig.from_json(json)
# print the JSON string representation of the object
print(StateFamilyConfig.to_json())

# convert the object into a dict
state_family_config_dict = state_family_config_instance.to_dict()
# create an instance of StateFamilyConfig from a dict
state_family_config_from_dict = StateFamilyConfig.from_dict(state_family_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


