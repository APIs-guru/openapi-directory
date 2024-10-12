# ServicesListSkus200ResponseValueInnerCapacity

A description of the scaling capacities of the SKU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | The default capacity | [optional] 
**maximum** | **int** | The maximum capacity | [optional] 
**minimum** | **int** | The minimum capacity, usually 0 or 1. | [optional] 
**scale_type** | **str** | The scalability approach | [optional] 

## Example

```python
from openapi_client.models.services_list_skus200_response_value_inner_capacity import ServicesListSkus200ResponseValueInnerCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesListSkus200ResponseValueInnerCapacity from a JSON string
services_list_skus200_response_value_inner_capacity_instance = ServicesListSkus200ResponseValueInnerCapacity.from_json(json)
# print the JSON string representation of the object
print(ServicesListSkus200ResponseValueInnerCapacity.to_json())

# convert the object into a dict
services_list_skus200_response_value_inner_capacity_dict = services_list_skus200_response_value_inner_capacity_instance.to_dict()
# create an instance of ServicesListSkus200ResponseValueInnerCapacity from a dict
services_list_skus200_response_value_inner_capacity_from_dict = ServicesListSkus200ResponseValueInnerCapacity.from_dict(services_list_skus200_response_value_inner_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


