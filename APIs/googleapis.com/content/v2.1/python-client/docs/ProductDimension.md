# ProductDimension


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | Required. The length units. Acceptable values are: - \&quot;&#x60;in&#x60;\&quot; - \&quot;&#x60;cm&#x60;\&quot;  | [optional] 
**value** | **float** | Required. The length value represented as a number. The value can have a maximum precision of four decimal places. | [optional] 

## Example

```python
from openapi_client.models.product_dimension import ProductDimension

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDimension from a JSON string
product_dimension_instance = ProductDimension.from_json(json)
# print the JSON string representation of the object
print(ProductDimension.to_json())

# convert the object into a dict
product_dimension_dict = product_dimension_instance.to_dict()
# create an instance of ProductDimension from a dict
product_dimension_from_dict = ProductDimension.from_dict(product_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


