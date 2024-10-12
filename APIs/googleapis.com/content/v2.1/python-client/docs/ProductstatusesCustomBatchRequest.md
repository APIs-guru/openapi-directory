# ProductstatusesCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ProductstatusesCustomBatchRequestEntry]**](ProductstatusesCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.productstatuses_custom_batch_request import ProductstatusesCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductstatusesCustomBatchRequest from a JSON string
productstatuses_custom_batch_request_instance = ProductstatusesCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(ProductstatusesCustomBatchRequest.to_json())

# convert the object into a dict
productstatuses_custom_batch_request_dict = productstatuses_custom_batch_request_instance.to_dict()
# create an instance of ProductstatusesCustomBatchRequest from a dict
productstatuses_custom_batch_request_from_dict = ProductstatusesCustomBatchRequest.from_dict(productstatuses_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


