# ProductstatusesCustomBatchRequestEntry

A batch entry encoding a single non-batch productstatuses request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**destinations** | **List[str]** | If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. | [optional] 
**include_attributes** | **bool** | Deprecated: Setting this field has no effect and attributes are never included. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;get&#x60;\&quot;  | [optional] 
**product_id** | **str** | The ID of the product whose status to get. | [optional] 

## Example

```python
from openapi_client.models.productstatuses_custom_batch_request_entry import ProductstatusesCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ProductstatusesCustomBatchRequestEntry from a JSON string
productstatuses_custom_batch_request_entry_instance = ProductstatusesCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(ProductstatusesCustomBatchRequestEntry.to_json())

# convert the object into a dict
productstatuses_custom_batch_request_entry_dict = productstatuses_custom_batch_request_entry_instance.to_dict()
# create an instance of ProductstatusesCustomBatchRequestEntry from a dict
productstatuses_custom_batch_request_entry_from_dict = ProductstatusesCustomBatchRequestEntry.from_dict(productstatuses_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


