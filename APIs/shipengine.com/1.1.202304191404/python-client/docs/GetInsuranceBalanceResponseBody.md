# GetInsuranceBalanceResponseBody

A get insurance balance response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The monetary amount, in the specified currency. | 
**currency** | **str** | The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | 

## Example

```python
from openapi_client.models.get_insurance_balance_response_body import GetInsuranceBalanceResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetInsuranceBalanceResponseBody from a JSON string
get_insurance_balance_response_body_instance = GetInsuranceBalanceResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetInsuranceBalanceResponseBody.to_json())

# convert the object into a dict
get_insurance_balance_response_body_dict = get_insurance_balance_response_body_instance.to_dict()
# create an instance of GetInsuranceBalanceResponseBody from a dict
get_insurance_balance_response_body_from_dict = GetInsuranceBalanceResponseBody.from_dict(get_insurance_balance_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


