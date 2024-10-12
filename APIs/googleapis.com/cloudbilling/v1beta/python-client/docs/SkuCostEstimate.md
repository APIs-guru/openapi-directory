# SkuCostEstimate

Estimated cost for usage on a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_estimate** | [**CostEstimate**](CostEstimate.md) |  | [optional] 
**sku** | **str** | The resource name for the SKU. Example: \&quot;services/DA34-426B-A397/skus/AA95-CD31-42FE\&quot; More information about the SKU can be found in the &#x60;skus&#x60; field of the &#x60;CostEstimationResult&#x60;. | [optional] 
**usage_amount** | **float** | The amount of usage on this SKU. | [optional] 
**usage_unit** | **str** | The unit for the usage on this SKU. | [optional] 

## Example

```python
from openapi_client.models.sku_cost_estimate import SkuCostEstimate

# TODO update the JSON string below
json = "{}"
# create an instance of SkuCostEstimate from a JSON string
sku_cost_estimate_instance = SkuCostEstimate.from_json(json)
# print the JSON string representation of the object
print(SkuCostEstimate.to_json())

# convert the object into a dict
sku_cost_estimate_dict = sku_cost_estimate_instance.to_dict()
# create an instance of SkuCostEstimate from a dict
sku_cost_estimate_from_dict = SkuCostEstimate.from_dict(sku_cost_estimate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


