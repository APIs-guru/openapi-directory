# AppServiceEnvironmentsChangeVnetRequest

Specification for using a Virtual Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id of the Virtual Network. | [optional] 
**name** | **str** | Name of the Virtual Network (read-only). | [optional] [readonly] 
**subnet** | **str** | Subnet within the Virtual Network. | [optional] 
**type** | **str** | Resource type of the Virtual Network (read-only). | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet_request import AppServiceEnvironmentsChangeVnetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnetRequest from a JSON string
app_service_environments_change_vnet_request_instance = AppServiceEnvironmentsChangeVnetRequest.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnetRequest.to_json())

# convert the object into a dict
app_service_environments_change_vnet_request_dict = app_service_environments_change_vnet_request_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnetRequest from a dict
app_service_environments_change_vnet_request_from_dict = AppServiceEnvironmentsChangeVnetRequest.from_dict(app_service_environments_change_vnet_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


