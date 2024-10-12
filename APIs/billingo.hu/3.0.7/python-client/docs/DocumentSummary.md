# DocumentSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gross_amount_local** | **float** |  | [optional] 
**net_amount** | **float** |  | [optional] 
**net_amount_local** | **float** |  | [optional] 
**vat_amount** | **float** |  | [optional] 
**vat_amount_local** | **float** |  | [optional] 
**vat_rate_summary** | [**List[DocumentVatRateSummary]**](DocumentVatRateSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_summary import DocumentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSummary from a JSON string
document_summary_instance = DocumentSummary.from_json(json)
# print the JSON string representation of the object
print(DocumentSummary.to_json())

# convert the object into a dict
document_summary_dict = document_summary_instance.to_dict()
# create an instance of DocumentSummary from a dict
document_summary_from_dict = DocumentSummary.from_dict(document_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


