# AppServicePlansList200Response

Collection of App Service plans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] 
**value** | [**List[AppServicePlansList200ResponseValueInner]**](AppServicePlansList200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_plans_list200_response import AppServicePlansList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansList200Response from a JSON string
app_service_plans_list200_response_instance = AppServicePlansList200Response.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansList200Response.to_json())

# convert the object into a dict
app_service_plans_list200_response_dict = app_service_plans_list200_response_instance.to_dict()
# create an instance of AppServicePlansList200Response from a dict
app_service_plans_list200_response_from_dict = AppServicePlansList200Response.from_dict(app_service_plans_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


