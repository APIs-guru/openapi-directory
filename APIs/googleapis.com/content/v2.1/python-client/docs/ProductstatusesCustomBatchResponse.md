# ProductstatusesCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ProductstatusesCustomBatchResponseEntry]**](ProductstatusesCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#productstatusesCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.productstatuses_custom_batch_response import ProductstatusesCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProductstatusesCustomBatchResponse from a JSON string
productstatuses_custom_batch_response_instance = ProductstatusesCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(ProductstatusesCustomBatchResponse.to_json())

# convert the object into a dict
productstatuses_custom_batch_response_dict = productstatuses_custom_batch_response_instance.to_dict()
# create an instance of ProductstatusesCustomBatchResponse from a dict
productstatuses_custom_batch_response_from_dict = ProductstatusesCustomBatchResponse.from_dict(productstatuses_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


