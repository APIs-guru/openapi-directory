# ProductstatusesCustomBatchResponseEntry

A batch entry encoding a single non-batch productstatuses response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#productstatusesCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**product_status** | [**ProductStatus**](ProductStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.productstatuses_custom_batch_response_entry import ProductstatusesCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ProductstatusesCustomBatchResponseEntry from a JSON string
productstatuses_custom_batch_response_entry_instance = ProductstatusesCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(ProductstatusesCustomBatchResponseEntry.to_json())

# convert the object into a dict
productstatuses_custom_batch_response_entry_dict = productstatuses_custom_batch_response_entry_instance.to_dict()
# create an instance of ProductstatusesCustomBatchResponseEntry from a dict
productstatuses_custom_batch_response_entry_from_dict = ProductstatusesCustomBatchResponseEntry.from_dict(productstatuses_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


