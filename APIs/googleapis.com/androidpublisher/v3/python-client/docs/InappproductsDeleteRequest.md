# InappproductsDeleteRequest

Request to delete an in-app product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**package_name** | **str** | Package name of the app. | [optional] 
**sku** | **str** | Unique identifier for the in-app product. | [optional] 

## Example

```python
from openapi_client.models.inappproducts_delete_request import InappproductsDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InappproductsDeleteRequest from a JSON string
inappproducts_delete_request_instance = InappproductsDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(InappproductsDeleteRequest.to_json())

# convert the object into a dict
inappproducts_delete_request_dict = inappproducts_delete_request_instance.to_dict()
# create an instance of InappproductsDeleteRequest from a dict
inappproducts_delete_request_from_dict = InappproductsDeleteRequest.from_dict(inappproducts_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


