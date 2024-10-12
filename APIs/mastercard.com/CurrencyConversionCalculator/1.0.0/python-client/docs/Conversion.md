# Conversion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_fee** | **float** | Additional fees imposed by the bank. | [optional] 
**conversion_rate** | **float** | Rate applied to the transaction to convert from Transaction Currency to Cardholder Billing Currency. | [optional] 
**crdhld_bill_amt** | **float** | Amount in the cardholder billing currency. | [optional] 
**crdhld_bill_curr** | **str** | Cardholder billing currency. | [optional] 
**error_code** | **str** | The error code associated with the error being returned. | [optional] 
**error_message** | **str** | The reason for the error. | [optional] 
**fx_date** | **str** | Date of the requested FX rates. | [optional] 
**trans_amt** | **float** | Amount in the transaction currency. | [optional] 
**trans_curr** | **str** | Currency of the transaction. | [optional] 

## Example

```python
from openapi_client.models.conversion import Conversion

# TODO update the JSON string below
json = "{}"
# create an instance of Conversion from a JSON string
conversion_instance = Conversion.from_json(json)
# print the JSON string representation of the object
print(Conversion.to_json())

# convert the object into a dict
conversion_dict = conversion_instance.to_dict()
# create an instance of Conversion from a dict
conversion_from_dict = Conversion.from_dict(conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


