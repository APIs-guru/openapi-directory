# OBFundsConfirmationConsentResponse1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | Unique identification as assigned to identify the funds confirmation consent resource. | 
**creation_date_time** | **datetime** | Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**debtor_account** | [**OBFundsConfirmationConsent1DataDebtorAccount**](OBFundsConfirmationConsent1DataDebtorAccount.md) |  | 
**expiration_date_time** | **datetime** | Specified date and time the funds confirmation authorisation will expire. If this is not populated, the authorisation will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**status** | **str** | Specifies the status of consent resource in code form. | 
**status_update_date_time** | **datetime** | Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 

## Example

```python
from openapi_client.models.ob_funds_confirmation_consent_response1_data import OBFundsConfirmationConsentResponse1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBFundsConfirmationConsentResponse1Data from a JSON string
ob_funds_confirmation_consent_response1_data_instance = OBFundsConfirmationConsentResponse1Data.from_json(json)
# print the JSON string representation of the object
print(OBFundsConfirmationConsentResponse1Data.to_json())

# convert the object into a dict
ob_funds_confirmation_consent_response1_data_dict = ob_funds_confirmation_consent_response1_data_instance.to_dict()
# create an instance of OBFundsConfirmationConsentResponse1Data from a dict
ob_funds_confirmation_consent_response1_data_from_dict = OBFundsConfirmationConsentResponse1Data.from_dict(ob_funds_confirmation_consent_response1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


