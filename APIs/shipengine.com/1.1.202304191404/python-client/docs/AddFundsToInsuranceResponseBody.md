# AddFundsToInsuranceResponseBody

Add funds to insurance response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The monetary amount, in the specified currency. | 
**currency** | **str** | The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | 

## Example

```python
from openapi_client.models.add_funds_to_insurance_response_body import AddFundsToInsuranceResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddFundsToInsuranceResponseBody from a JSON string
add_funds_to_insurance_response_body_instance = AddFundsToInsuranceResponseBody.from_json(json)
# print the JSON string representation of the object
print(AddFundsToInsuranceResponseBody.to_json())

# convert the object into a dict
add_funds_to_insurance_response_body_dict = add_funds_to_insurance_response_body_instance.to_dict()
# create an instance of AddFundsToInsuranceResponseBody from a dict
add_funds_to_insurance_response_body_from_dict = AddFundsToInsuranceResponseBody.from_dict(add_funds_to_insurance_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


