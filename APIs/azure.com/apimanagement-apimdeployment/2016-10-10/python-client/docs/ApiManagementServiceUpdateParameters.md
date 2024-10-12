# ApiManagementServiceUpdateParameters

Parameters supplied to the Update API Management service operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiManagementServiceProperties**](ApiManagementServiceProperties.md) |  | [optional] 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

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


