# Sku

Billing information related properties of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The scale up/out capacity, representing server&#39;s compute units. | [optional] 
**family** | **str** | The family of hardware. | [optional] 
**name** | **str** | The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8. | [optional] 
**size** | **str** | The size code, to be interpreted by resource as appropriate. | [optional] 
**tier** | **str** | The tier of the particular SKU, e.g. Basic. | [optional] 

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


