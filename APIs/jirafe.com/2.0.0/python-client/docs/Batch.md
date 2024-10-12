# Batch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart** | [**List[Cart]**](Cart.md) |  | [optional] 
**category** | [**List[Category]**](Category.md) |  | [optional] 
**customer** | [**List[Customer]**](Customer.md) |  | [optional] 
**employee** | **List[object]** |  | [optional] 
**order** | [**List[Order]**](Order.md) |  | [optional] 
**product** | [**List[Product]**](Product.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch import Batch

# TODO update the JSON string below
json = "{}"
# create an instance of Batch from a JSON string
batch_instance = Batch.from_json(json)
# print the JSON string representation of the object
print(Batch.to_json())

# convert the object into a dict
batch_dict = batch_instance.to_dict()
# create an instance of Batch from a dict
batch_from_dict = Batch.from_dict(batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


