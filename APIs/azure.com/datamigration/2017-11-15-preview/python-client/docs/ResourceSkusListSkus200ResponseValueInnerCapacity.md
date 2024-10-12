# ResourceSkusListSkus200ResponseValueInnerCapacity

Describes scaling information of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | The default capacity. | [optional] [readonly] 
**maximum** | **int** | The maximum capacity. | [optional] [readonly] 
**minimum** | **int** | The minimum capacity. | [optional] [readonly] 
**scale_type** | **str** | The scale type applicable to the SKU. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_skus_list_skus200_response_value_inner_capacity import ResourceSkusListSkus200ResponseValueInnerCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusListSkus200ResponseValueInnerCapacity from a JSON string
resource_skus_list_skus200_response_value_inner_capacity_instance = ResourceSkusListSkus200ResponseValueInnerCapacity.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusListSkus200ResponseValueInnerCapacity.to_json())

# convert the object into a dict
resource_skus_list_skus200_response_value_inner_capacity_dict = resource_skus_list_skus200_response_value_inner_capacity_instance.to_dict()
# create an instance of ResourceSkusListSkus200ResponseValueInnerCapacity from a dict
resource_skus_list_skus200_response_value_inner_capacity_from_dict = ResourceSkusListSkus200ResponseValueInnerCapacity.from_dict(resource_skus_list_skus200_response_value_inner_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


