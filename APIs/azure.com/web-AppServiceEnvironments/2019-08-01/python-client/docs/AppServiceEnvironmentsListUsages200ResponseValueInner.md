# AppServiceEnvironmentsListUsages200ResponseValueInner

Usage of the quota resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current value of the resource counter. | [optional] 
**limit** | **int** | The resource limit. | [optional] 
**name** | [**AppServiceEnvironmentsListUsages200ResponseValueInnerName**](AppServiceEnvironmentsListUsages200ResponseValueInnerName.md) |  | [optional] 
**next_reset_time** | **datetime** | Next reset time for the resource counter. | [optional] 
**unit** | **str** | Units of measurement for the quota resource. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_list_usages200_response_value_inner import AppServiceEnvironmentsListUsages200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListUsages200ResponseValueInner from a JSON string
app_service_environments_list_usages200_response_value_inner_instance = AppServiceEnvironmentsListUsages200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListUsages200ResponseValueInner.to_json())

# convert the object into a dict
app_service_environments_list_usages200_response_value_inner_dict = app_service_environments_list_usages200_response_value_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsListUsages200ResponseValueInner from a dict
app_service_environments_list_usages200_response_value_inner_from_dict = AppServiceEnvironmentsListUsages200ResponseValueInner.from_dict(app_service_environments_list_usages200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


