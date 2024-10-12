# Sku

SKU for the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The SKU capacity. | [optional] 
**family** | **str** | The SKU family. | [optional] 
**model** | **str** | The SKU model. | [optional] 
**name** | **str** | The SKU name. | [optional] 
**size** | **str** | The SKU size. | [optional] 
**tier** | **str** | The SKU tier. | [optional] 

## Example

```python
from openapi_client.models.sku import Sku

# TODO update the JSON string below
json = "{}"
# create an instance of Sku from a JSON string
sku_instance = Sku.from_json(json)
# print the JSON string representation of the object
print(Sku.to_json())

# convert the object into a dict
sku_dict = sku_instance.to_dict()
# create an instance of Sku from a dict
sku_from_dict = Sku.from_dict(sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


