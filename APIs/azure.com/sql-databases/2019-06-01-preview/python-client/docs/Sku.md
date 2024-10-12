# Sku

An ARM Resource SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Capacity of the particular SKU. | [optional] 
**family** | **str** | If the service has different generations of hardware, for the same SKU, then that can be captured here. | [optional] 
**name** | **str** | The name of the SKU, typically, a letter + Number code, e.g. P3. | 
**size** | **str** | Size of the particular SKU | [optional] 
**tier** | **str** | The tier or edition of the particular SKU, e.g. Basic, Premium. | [optional] 

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


