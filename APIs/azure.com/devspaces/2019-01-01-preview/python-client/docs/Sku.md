# Sku

Model representing SKU for Azure Dev Spaces Controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the SKU for Azure Dev Spaces Controller. | 
**tier** | **str** | The tier of the SKU for Azure Dev Spaces Controller. | [optional] 

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


