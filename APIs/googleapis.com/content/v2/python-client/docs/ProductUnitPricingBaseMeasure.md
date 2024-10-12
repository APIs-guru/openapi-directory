# ProductUnitPricingBaseMeasure


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit of the denominator. | [optional] 
**value** | **str** | The denominator of the unit price. | [optional] 

## Example

```python
from openapi_client.models.product_unit_pricing_base_measure import ProductUnitPricingBaseMeasure

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUnitPricingBaseMeasure from a JSON string
product_unit_pricing_base_measure_instance = ProductUnitPricingBaseMeasure.from_json(json)
# print the JSON string representation of the object
print(ProductUnitPricingBaseMeasure.to_json())

# convert the object into a dict
product_unit_pricing_base_measure_dict = product_unit_pricing_base_measure_instance.to_dict()
# create an instance of ProductUnitPricingBaseMeasure from a dict
product_unit_pricing_base_measure_from_dict = ProductUnitPricingBaseMeasure.from_dict(product_unit_pricing_base_measure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


