# ApiManagementServiceSkuProperties

API Management service resource SKU properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Capacity of the SKU (number of deployed units of the SKU). The default value is 1. | [optional] [default to 1]
**name** | **str** | Name of the Sku. | 

## Example

```python
from openapi_client.models.api_management_service_sku_properties import ApiManagementServiceSkuProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceSkuProperties from a JSON string
api_management_service_sku_properties_instance = ApiManagementServiceSkuProperties.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceSkuProperties.to_json())

# convert the object into a dict
api_management_service_sku_properties_dict = api_management_service_sku_properties_instance.to_dict()
# create an instance of ApiManagementServiceSkuProperties from a dict
api_management_service_sku_properties_from_dict = ApiManagementServiceSkuProperties.from_dict(api_management_service_sku_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


