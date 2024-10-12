# ApiManagementServiceUpdateParameters

Parameter supplied to Update Api Management Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] [readonly] 
**identity** | [**ApiManagementServiceIdentity**](ApiManagementServiceIdentity.md) |  | [optional] 
**properties** | [**ApiManagementServiceUpdateProperties**](ApiManagementServiceUpdateProperties.md) |  | [optional] 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type for API Management resource is set to Microsoft.ApiManagement. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_management_service_update_parameters import ApiManagementServiceUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceUpdateParameters from a JSON string
api_management_service_update_parameters_instance = ApiManagementServiceUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceUpdateParameters.to_json())

# convert the object into a dict
api_management_service_update_parameters_dict = api_management_service_update_parameters_instance.to_dict()
# create an instance of ApiManagementServiceUpdateParameters from a dict
api_management_service_update_parameters_from_dict = ApiManagementServiceUpdateParameters.from_dict(api_management_service_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


