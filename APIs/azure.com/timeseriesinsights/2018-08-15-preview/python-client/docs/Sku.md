# Sku

The sku determines the type of environment, either standard (S1 or S2) or long-term (L1). For standard environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The capacity of the sku. For standard environments, this value can be changed to support scale out of environments after they have been created. | 
**name** | **str** | The name of this SKU. | 

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


