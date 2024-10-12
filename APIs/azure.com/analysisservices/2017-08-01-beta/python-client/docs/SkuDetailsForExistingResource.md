# SkuDetailsForExistingResource

An object that represents SKU details for existing resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.sku_details_for_existing_resource import SkuDetailsForExistingResource

# TODO update the JSON string below
json = "{}"
# create an instance of SkuDetailsForExistingResource from a JSON string
sku_details_for_existing_resource_instance = SkuDetailsForExistingResource.from_json(json)
# print the JSON string representation of the object
print(SkuDetailsForExistingResource.to_json())

# convert the object into a dict
sku_details_for_existing_resource_dict = sku_details_for_existing_resource_instance.to_dict()
# create an instance of SkuDetailsForExistingResource from a dict
sku_details_for_existing_resource_from_dict = SkuDetailsForExistingResource.from_dict(sku_details_for_existing_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


