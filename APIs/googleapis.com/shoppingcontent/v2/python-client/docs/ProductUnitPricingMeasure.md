# ProductUnitPricingMeasure


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The unit of the measure. | [optional] 
**value** | **float** | The measure of an item. | [optional] 

## Example

```python
from openapi_client.models.product_unit_pricing_measure import ProductUnitPricingMeasure

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUnitPricingMeasure from a JSON string
product_unit_pricing_measure_instance = ProductUnitPricingMeasure.from_json(json)
# print the JSON string representation of the object
print(ProductUnitPricingMeasure.to_json())

# convert the object into a dict
product_unit_pricing_measure_dict = product_unit_pricing_measure_instance.to_dict()
# create an instance of ProductUnitPricingMeasure from a dict
product_unit_pricing_measure_from_dict = ProductUnitPricingMeasure.from_dict(product_unit_pricing_measure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


