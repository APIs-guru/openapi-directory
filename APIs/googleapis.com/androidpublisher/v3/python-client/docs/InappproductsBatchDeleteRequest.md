# InappproductsBatchDeleteRequest

Request to delete multiple in-app products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[InappproductsDeleteRequest]**](InappproductsDeleteRequest.md) | Individual delete requests. At least one request is required. Can contain up to 100 requests. All requests must correspond to different in-app products. | [optional] 

## Example

```python
from openapi_client.models.inappproducts_batch_delete_request import InappproductsBatchDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InappproductsBatchDeleteRequest from a JSON string
inappproducts_batch_delete_request_instance = InappproductsBatchDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(InappproductsBatchDeleteRequest.to_json())

# convert the object into a dict
inappproducts_batch_delete_request_dict = inappproducts_batch_delete_request_instance.to_dict()
# create an instance of InappproductsBatchDeleteRequest from a dict
inappproducts_batch_delete_request_from_dict = InappproductsBatchDeleteRequest.from_dict(inappproducts_batch_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


