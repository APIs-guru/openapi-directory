# DocumentVatRateSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vat_name** | **str** |  | [optional] 
**vat_percentage** | **float** |  | [optional] 
**vat_rate_gross_amount** | **float** |  | [optional] 
**vat_rate_net_amount** | **float** |  | [optional] 
**vat_rate_vat_amount** | **float** |  | [optional] 
**vat_rate_vat_amount_local** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.document_vat_rate_summary import DocumentVatRateSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentVatRateSummary from a JSON string
document_vat_rate_summary_instance = DocumentVatRateSummary.from_json(json)
# print the JSON string representation of the object
print(DocumentVatRateSummary.to_json())

# convert the object into a dict
document_vat_rate_summary_dict = document_vat_rate_summary_instance.to_dict()
# create an instance of DocumentVatRateSummary from a dict
document_vat_rate_summary_from_dict = DocumentVatRateSummary.from_dict(document_vat_rate_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


