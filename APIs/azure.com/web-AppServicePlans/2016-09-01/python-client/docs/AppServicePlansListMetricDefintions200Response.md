# AppServicePlansListMetricDefintions200Response

Collection of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServicePlansListMetricDefintions200ResponseValueInner]**](AppServicePlansListMetricDefintions200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_plans_list_metric_defintions200_response import AppServicePlansListMetricDefintions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListMetricDefintions200Response from a JSON string
app_service_plans_list_metric_defintions200_response_instance = AppServicePlansListMetricDefintions200Response.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListMetricDefintions200Response.to_json())

# convert the object into a dict
app_service_plans_list_metric_defintions200_response_dict = app_service_plans_list_metric_defintions200_response_instance.to_dict()
# create an instance of AppServicePlansListMetricDefintions200Response from a dict
app_service_plans_list_metric_defintions200_response_from_dict = AppServicePlansListMetricDefintions200Response.from_dict(app_service_plans_list_metric_defintions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


