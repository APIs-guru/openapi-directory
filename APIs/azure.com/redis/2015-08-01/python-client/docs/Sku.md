# Sku

SKU parameters supplied to the create Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | What size of Redis cache to deploy. Valid values: for C family (0, 1, 2, 3, 4, 5, 6), for P family (1, 2, 3, 4). | 
**family** | **str** | Which family to use. Valid values: (C, P). | 
**name** | **str** | What type of Redis cache to deploy. Valid values: (Basic, Standard, Premium). | 

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


