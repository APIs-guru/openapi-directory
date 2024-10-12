# OBWriteFundsConfirmationResponse1DataFundsAvailableResult

Result of a funds availability check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**funds_available** | **bool** | Flag to indicate the availability of funds given the Amount in the consent request. | 
**funds_available_date_time** | **datetime** | Date and time at which the funds availability check was generated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 

## Example

```python
from openapi_client.models.ob_write_funds_confirmation_response1_data_funds_available_result import OBWriteFundsConfirmationResponse1DataFundsAvailableResult

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFundsConfirmationResponse1DataFundsAvailableResult from a JSON string
ob_write_funds_confirmation_response1_data_funds_available_result_instance = OBWriteFundsConfirmationResponse1DataFundsAvailableResult.from_json(json)
# print the JSON string representation of the object
print(OBWriteFundsConfirmationResponse1DataFundsAvailableResult.to_json())

# convert the object into a dict
ob_write_funds_confirmation_response1_data_funds_available_result_dict = ob_write_funds_confirmation_response1_data_funds_available_result_instance.to_dict()
# create an instance of OBWriteFundsConfirmationResponse1DataFundsAvailableResult from a dict
ob_write_funds_confirmation_response1_data_funds_available_result_from_dict = OBWriteFundsConfirmationResponse1DataFundsAvailableResult.from_dict(ob_write_funds_confirmation_response1_data_funds_available_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


