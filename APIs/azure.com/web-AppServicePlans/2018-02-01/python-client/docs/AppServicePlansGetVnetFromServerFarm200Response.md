# AppServicePlansGetVnetFromServerFarm200Response

Virtual Network information contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansListVnets200ResponseInnerProperties**](AppServicePlansListVnets200ResponseInnerProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_get_vnet_from_server_farm200_response import AppServicePlansGetVnetFromServerFarm200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansGetVnetFromServerFarm200Response from a JSON string
app_service_plans_get_vnet_from_server_farm200_response_instance = AppServicePlansGetVnetFromServerFarm200Response.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansGetVnetFromServerFarm200Response.to_json())

# convert the object into a dict
app_service_plans_get_vnet_from_server_farm200_response_dict = app_service_plans_get_vnet_from_server_farm200_response_instance.to_dict()
# create an instance of AppServicePlansGetVnetFromServerFarm200Response from a dict
app_service_plans_get_vnet_from_server_farm200_response_from_dict = AppServicePlansGetVnetFromServerFarm200Response.from_dict(app_service_plans_get_vnet_from_server_farm200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


