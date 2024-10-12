# OBFundsConfirmationResponse1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation consent resource. | 
**creation_date_time** | **datetime** | Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**funds_available** | **bool** | Flag to indicate the result of a confirmation of funds check. | 
**funds_confirmation_id** | **str** | Unique identification as assigned by the ASPSP to uniquely identify the funds confirmation resource. | 
**instructed_amount** | [**OBFundsConfirmation1DataInstructedAmount**](OBFundsConfirmation1DataInstructedAmount.md) |  | 
**reference** | **str** | Unique reference, as assigned by the CBPII, to unambiguously refer to the request related to the payment transaction. | 

## Example

```python
from openapi_client.models.ob_funds_confirmation_response1_data import OBFundsConfirmationResponse1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBFundsConfirmationResponse1Data from a JSON string
ob_funds_confirmation_response1_data_instance = OBFundsConfirmationResponse1Data.from_json(json)
# print the JSON string representation of the object
print(OBFundsConfirmationResponse1Data.to_json())

# convert the object into a dict
ob_funds_confirmation_response1_data_dict = ob_funds_confirmation_response1_data_instance.to_dict()
# create an instance of OBFundsConfirmationResponse1Data from a dict
ob_funds_confirmation_response1_data_from_dict = OBFundsConfirmationResponse1Data.from_dict(ob_funds_confirmation_response1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


