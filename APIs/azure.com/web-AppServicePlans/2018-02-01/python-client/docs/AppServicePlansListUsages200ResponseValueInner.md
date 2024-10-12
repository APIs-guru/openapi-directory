# AppServicePlansListUsages200ResponseValueInner

Usage of the quota resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current value of the resource counter. | [optional] 
**limit** | **int** | The resource limit. | [optional] 
**name** | [**AppServicePlansListUsages200ResponseValueInnerName**](AppServicePlansListUsages200ResponseValueInnerName.md) |  | [optional] 
**next_reset_time** | **datetime** | Next reset time for the resource counter. | [optional] 
**unit** | **str** | Units of measurement for the quota resource. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_usages200_response_value_inner import AppServicePlansListUsages200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListUsages200ResponseValueInner from a JSON string
app_service_plans_list_usages200_response_value_inner_instance = AppServicePlansListUsages200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListUsages200ResponseValueInner.to_json())

# convert the object into a dict
app_service_plans_list_usages200_response_value_inner_dict = app_service_plans_list_usages200_response_value_inner_instance.to_dict()
# create an instance of AppServicePlansListUsages200ResponseValueInner from a dict
app_service_plans_list_usages200_response_value_inner_from_dict = AppServicePlansListUsages200ResponseValueInner.from_dict(app_service_plans_list_usages200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


