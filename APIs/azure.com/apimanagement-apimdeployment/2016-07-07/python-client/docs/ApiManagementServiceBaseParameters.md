# ApiManagementServiceBaseParameters

Parameters supplied to the Update API Management service operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiManagementServiceProperties**](ApiManagementServiceProperties.md) |  | [optional] 
**sku** | [**ApiManagementServiceSkuProperties**](ApiManagementServiceSkuProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | API Management service tags. A maximum of 10 tags can be provided for a resource, and each tag must have a key no greater than 128 characters (and a value no greater than 256 characters). | [optional] 

## Example

```python
from openapi_client.models.api_management_service_base_parameters import ApiManagementServiceBaseParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceBaseParameters from a JSON string
api_management_service_base_parameters_instance = ApiManagementServiceBaseParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceBaseParameters.to_json())

# convert the object into a dict
api_management_service_base_parameters_dict = api_management_service_base_parameters_instance.to_dict()
# create an instance of ApiManagementServiceBaseParameters from a dict
api_management_service_base_parameters_from_dict = ApiManagementServiceBaseParameters.from_dict(api_management_service_base_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


