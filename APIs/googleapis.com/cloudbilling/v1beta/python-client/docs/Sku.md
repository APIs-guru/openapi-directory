# Sku

Information about SKUs appearing in the cost estimate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for the SKU. Example: A2 Instance Core running in Americas | [optional] 
**prices** | [**List[Price]**](Price.md) | A timeline of prices for a SKU in chronological order. Note: The API currently only supports using a constant price for the entire estimation time frame so this list will contain a single value. | [optional] 
**sku** | **str** | The resource name for the SKU. Example: \&quot;services/DA34-426B-A397/skus/AA95-CD31-42FE\&quot; | [optional] 

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


