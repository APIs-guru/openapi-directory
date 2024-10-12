# AppServicePlansCreateOrUpdateVnetRouteRequest

Virtual Network route contract used to pass routing information for a Virtual Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansListVnets200ResponseInnerPropertiesRoutesInnerProperties**](AppServicePlansListVnets200ResponseInnerPropertiesRoutesInnerProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_create_or_update_vnet_route_request import AppServicePlansCreateOrUpdateVnetRouteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansCreateOrUpdateVnetRouteRequest from a JSON string
app_service_plans_create_or_update_vnet_route_request_instance = AppServicePlansCreateOrUpdateVnetRouteRequest.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansCreateOrUpdateVnetRouteRequest.to_json())

# convert the object into a dict
app_service_plans_create_or_update_vnet_route_request_dict = app_service_plans_create_or_update_vnet_route_request_instance.to_dict()
# create an instance of AppServicePlansCreateOrUpdateVnetRouteRequest from a dict
app_service_plans_create_or_update_vnet_route_request_from_dict = AppServicePlansCreateOrUpdateVnetRouteRequest.from_dict(app_service_plans_create_or_update_vnet_route_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


