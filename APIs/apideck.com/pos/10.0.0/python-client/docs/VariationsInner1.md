# VariationsInner1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**item_id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** |  | [optional] 
**present_at_all_locations** | **bool** |  | [optional] 
**price_amount** | **float** |  | [optional] 
**price_currency** | [**Currency**](Currency.md) |  | [optional] 
**pricing_type** | **str** |  | [optional] 
**sequence** | **float** |  | [optional] 
**sku** | **str** |  | [optional] 
**stockable** | **bool** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**version** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.variations_inner1 import VariationsInner1

# TODO update the JSON string below
json = "{}"
# create an instance of VariationsInner1 from a JSON string
variations_inner1_instance = VariationsInner1.from_json(json)
# print the JSON string representation of the object
print(VariationsInner1.to_json())

# convert the object into a dict
variations_inner1_dict = variations_inner1_instance.to_dict()
# create an instance of VariationsInner1 from a dict
variations_inner1_from_dict = VariationsInner1.from_dict(variations_inner1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


