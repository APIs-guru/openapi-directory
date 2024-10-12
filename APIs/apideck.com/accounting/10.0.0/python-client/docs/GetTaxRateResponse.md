# GetTaxRateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TaxRate**](TaxRate.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_tax_rate_response import GetTaxRateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaxRateResponse from a JSON string
get_tax_rate_response_instance = GetTaxRateResponse.from_json(json)
# print the JSON string representation of the object
print(GetTaxRateResponse.to_json())

# convert the object into a dict
get_tax_rate_response_dict = get_tax_rate_response_instance.to_dict()
# create an instance of GetTaxRateResponse from a dict
get_tax_rate_response_from_dict = GetTaxRateResponse.from_dict(get_tax_rate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


