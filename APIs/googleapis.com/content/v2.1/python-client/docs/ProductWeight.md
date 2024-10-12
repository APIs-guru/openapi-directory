# ProductWeight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | Required. The weight unit. Acceptable values are: - \&quot;&#x60;g&#x60;\&quot; - \&quot;&#x60;kg&#x60;\&quot; - \&quot;&#x60;oz&#x60;\&quot; - \&quot;&#x60;lb&#x60;\&quot;  | [optional] 
**value** | **float** | Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. | [optional] 

## Example

```python
from openapi_client.models.product_weight import ProductWeight

# TODO update the JSON string below
json = "{}"
# create an instance of ProductWeight from a JSON string
product_weight_instance = ProductWeight.from_json(json)
# print the JSON string representation of the object
print(ProductWeight.to_json())

# convert the object into a dict
product_weight_dict = product_weight_instance.to_dict()
# create an instance of ProductWeight from a dict
product_weight_from_dict = ProductWeight.from_dict(product_weight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


