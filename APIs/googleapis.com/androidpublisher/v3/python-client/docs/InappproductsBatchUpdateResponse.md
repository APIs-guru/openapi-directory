# InappproductsBatchUpdateResponse

Response for a batch in-app product update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inappproducts** | [**List[InAppProduct]**](InAppProduct.md) | The updated or inserted in-app products. | [optional] 

## Example

```python
from openapi_client.models.inappproducts_batch_update_response import InappproductsBatchUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InappproductsBatchUpdateResponse from a JSON string
inappproducts_batch_update_response_instance = InappproductsBatchUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(InappproductsBatchUpdateResponse.to_json())

# convert the object into a dict
inappproducts_batch_update_response_dict = inappproducts_batch_update_response_instance.to_dict()
# create an instance of InappproductsBatchUpdateResponse from a dict
inappproducts_batch_update_response_from_dict = InappproductsBatchUpdateResponse.from_dict(inappproducts_batch_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


