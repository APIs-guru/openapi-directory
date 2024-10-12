# PurgeProductsRequest

Request message for the `PurgeProducts` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_orphan_products** | **bool** | If delete_orphan_products is true, all Products that are not in any ProductSet will be deleted. | [optional] 
**force** | **bool** | The default value is false. Override this value to true to actually perform the purge. | [optional] 
**product_set_purge_config** | [**ProductSetPurgeConfig**](ProductSetPurgeConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.purge_products_request import PurgeProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PurgeProductsRequest from a JSON string
purge_products_request_instance = PurgeProductsRequest.from_json(json)
# print the JSON string representation of the object
print(PurgeProductsRequest.to_json())

# convert the object into a dict
purge_products_request_dict = purge_products_request_instance.to_dict()
# create an instance of PurgeProductsRequest from a dict
purge_products_request_from_dict = PurgeProductsRequest.from_dict(purge_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


