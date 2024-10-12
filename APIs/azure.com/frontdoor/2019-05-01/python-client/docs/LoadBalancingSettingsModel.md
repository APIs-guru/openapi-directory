# LoadBalancingSettingsModel

Load balancing settings for a backend pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name. | [optional] 
**properties** | [**LoadBalancingSettingsProperties**](LoadBalancingSettingsProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.load_balancing_settings_model import LoadBalancingSettingsModel

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancingSettingsModel from a JSON string
load_balancing_settings_model_instance = LoadBalancingSettingsModel.from_json(json)
# print the JSON string representation of the object
print(LoadBalancingSettingsModel.to_json())

# convert the object into a dict
load_balancing_settings_model_dict = load_balancing_settings_model_instance.to_dict()
# create an instance of LoadBalancingSettingsModel from a dict
load_balancing_settings_model_from_dict = LoadBalancingSettingsModel.from_dict(load_balancing_settings_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


