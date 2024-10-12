# ServicesListSkus200ResponseValueInner

Describes the available service SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**ServicesListSkus200ResponseValueInnerCapacity**](ServicesListSkus200ResponseValueInnerCapacity.md) |  | [optional] 
**resource_type** | **str** | The resource type, including the provider namespace | [optional] 
**sku** | [**ServicesListSkus200ResponseValueInnerSku**](ServicesListSkus200ResponseValueInnerSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.services_list_skus200_response_value_inner import ServicesListSkus200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesListSkus200ResponseValueInner from a JSON string
services_list_skus200_response_value_inner_instance = ServicesListSkus200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ServicesListSkus200ResponseValueInner.to_json())

# convert the object into a dict
services_list_skus200_response_value_inner_dict = services_list_skus200_response_value_inner_instance.to_dict()
# create an instance of ServicesListSkus200ResponseValueInner from a dict
services_list_skus200_response_value_inner_from_dict = ServicesListSkus200ResponseValueInner.from_dict(services_list_skus200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


