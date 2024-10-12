# ProductSetPurgeConfig

Config to control which ProductSet contains the Products to be deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_set_id** | **str** | The ProductSet that contains the Products to delete. If a Product is a member of product_set_id in addition to other ProductSets, the Product will still be deleted. | [optional] 

## Example

```python
from openapi_client.models.product_set_purge_config import ProductSetPurgeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSetPurgeConfig from a JSON string
product_set_purge_config_instance = ProductSetPurgeConfig.from_json(json)
# print the JSON string representation of the object
print(ProductSetPurgeConfig.to_json())

# convert the object into a dict
product_set_purge_config_dict = product_set_purge_config_instance.to_dict()
# create an instance of ProductSetPurgeConfig from a dict
product_set_purge_config_from_dict = ProductSetPurgeConfig.from_dict(product_set_purge_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


