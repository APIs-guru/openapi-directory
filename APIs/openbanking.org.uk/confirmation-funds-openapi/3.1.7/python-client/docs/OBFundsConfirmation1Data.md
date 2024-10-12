# OBFundsConfirmation1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource. | 
**instructed_amount** | [**OBFundsConfirmation1DataInstructedAmount**](OBFundsConfirmation1DataInstructedAmount.md) |  | 
**reference** | **str** | Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction. | 

## Example

```python
from openapi_client.models.ob_funds_confirmation1_data import OBFundsConfirmation1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBFundsConfirmation1Data from a JSON string
ob_funds_confirmation1_data_instance = OBFundsConfirmation1Data.from_json(json)
# print the JSON string representation of the object
print(OBFundsConfirmation1Data.to_json())

# convert the object into a dict
ob_funds_confirmation1_data_dict = ob_funds_confirmation1_data_instance.to_dict()
# create an instance of OBFundsConfirmation1Data from a dict
ob_funds_confirmation1_data_from_dict = OBFundsConfirmation1Data.from_dict(ob_funds_confirmation1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


