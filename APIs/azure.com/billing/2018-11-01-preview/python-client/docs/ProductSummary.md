# ProductSummary

A product summary resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductSummaryProperties**](ProductSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_summary import ProductSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSummary from a JSON string
product_summary_instance = ProductSummary.from_json(json)
# print the JSON string representation of the object
print(ProductSummary.to_json())

# convert the object into a dict
product_summary_dict = product_summary_instance.to_dict()
# create an instance of ProductSummary from a dict
product_summary_from_dict = ProductSummary.from_dict(product_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


