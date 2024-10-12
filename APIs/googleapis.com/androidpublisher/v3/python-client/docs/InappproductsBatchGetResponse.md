# InappproductsBatchGetResponse

Response message for BatchGetSubscriptions endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inappproduct** | [**List[InAppProduct]**](InAppProduct.md) | The list of requested in-app products, in the same order as the request. | [optional] 

## Example

```python
from openapi_client.models.inappproducts_batch_get_response import InappproductsBatchGetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InappproductsBatchGetResponse from a JSON string
inappproducts_batch_get_response_instance = InappproductsBatchGetResponse.from_json(json)
# print the JSON string representation of the object
print(InappproductsBatchGetResponse.to_json())

# convert the object into a dict
inappproducts_batch_get_response_dict = inappproducts_batch_get_response_instance.to_dict()
# create an instance of InappproductsBatchGetResponse from a dict
inappproducts_batch_get_response_from_dict = InappproductsBatchGetResponse.from_dict(inappproducts_batch_get_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


