# ResourceSkusListSkus200ResponseValueInnerCostsInner

Describes metadata for retrieving price info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_unit** | **str** | An invariant to show the extended unit. | [optional] [readonly] 
**meter_id** | **str** | Used for querying price from commerce. | [optional] [readonly] 
**quantity** | **int** | The multiplier is needed to extend the base metered cost. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_skus_list_skus200_response_value_inner_costs_inner import ResourceSkusListSkus200ResponseValueInnerCostsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusListSkus200ResponseValueInnerCostsInner from a JSON string
resource_skus_list_skus200_response_value_inner_costs_inner_instance = ResourceSkusListSkus200ResponseValueInnerCostsInner.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusListSkus200ResponseValueInnerCostsInner.to_json())

# convert the object into a dict
resource_skus_list_skus200_response_value_inner_costs_inner_dict = resource_skus_list_skus200_response_value_inner_costs_inner_instance.to_dict()
# create an instance of ResourceSkusListSkus200ResponseValueInnerCostsInner from a dict
resource_skus_list_skus200_response_value_inner_costs_inner_from_dict = ResourceSkusListSkus200ResponseValueInnerCostsInner.from_dict(resource_skus_list_skus200_response_value_inner_costs_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


