# CostManagementConfig

Configuration for fine-grained cost management feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the feature is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.cost_management_config import CostManagementConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CostManagementConfig from a JSON string
cost_management_config_instance = CostManagementConfig.from_json(json)
# print the JSON string representation of the object
print(CostManagementConfig.to_json())

# convert the object into a dict
cost_management_config_dict = cost_management_config_instance.to_dict()
# create an instance of CostManagementConfig from a dict
cost_management_config_from_dict = CostManagementConfig.from_dict(cost_management_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


