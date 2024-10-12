# AppServicePlansListHybridConnectionKeys200Response

Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansListHybridConnectionKeys200ResponseProperties**](AppServicePlansListHybridConnectionKeys200ResponseProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_list_hybrid_connection_keys200_response import AppServicePlansListHybridConnectionKeys200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListHybridConnectionKeys200Response from a JSON string
app_service_plans_list_hybrid_connection_keys200_response_instance = AppServicePlansListHybridConnectionKeys200Response.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListHybridConnectionKeys200Response.to_json())

# convert the object into a dict
app_service_plans_list_hybrid_connection_keys200_response_dict = app_service_plans_list_hybrid_connection_keys200_response_instance.to_dict()
# create an instance of AppServicePlansListHybridConnectionKeys200Response from a dict
app_service_plans_list_hybrid_connection_keys200_response_from_dict = AppServicePlansListHybridConnectionKeys200Response.from_dict(app_service_plans_list_hybrid_connection_keys200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


