# LoadBalancingSettingsListResult

Result of the request to list load balancing settings. It contains a list of load balancing settings objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of LoadBalancingSettings objects if there are any. | [optional] 
**value** | [**List[LoadBalancingSettingsModel]**](LoadBalancingSettingsModel.md) | List of Backend Pools within a Front Door. | [optional] [readonly] 

## Example

```python
from openapi_client.models.load_balancing_settings_list_result import LoadBalancingSettingsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancingSettingsListResult from a JSON string
load_balancing_settings_list_result_instance = LoadBalancingSettingsListResult.from_json(json)
# print the JSON string representation of the object
print(LoadBalancingSettingsListResult.to_json())

# convert the object into a dict
load_balancing_settings_list_result_dict = load_balancing_settings_list_result_instance.to_dict()
# create an instance of LoadBalancingSettingsListResult from a dict
load_balancing_settings_list_result_from_dict = LoadBalancingSettingsListResult.from_dict(load_balancing_settings_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


