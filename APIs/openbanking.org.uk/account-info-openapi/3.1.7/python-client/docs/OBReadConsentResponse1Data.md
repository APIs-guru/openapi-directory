# OBReadConsentResponse1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | Unique identification as assigned to identify the account access consent resource. | 
**creation_date_time** | **datetime** | Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**expiration_date_time** | **datetime** | Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**permissions** | **List[str]** |  | 
**status** | **str** | Specifies the status of consent resource in code form. | 
**status_update_date_time** | **datetime** | Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**transaction_from_date_time** | **datetime** | Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**transaction_to_date_time** | **datetime** | Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_read_consent_response1_data import OBReadConsentResponse1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadConsentResponse1Data from a JSON string
ob_read_consent_response1_data_instance = OBReadConsentResponse1Data.from_json(json)
# print the JSON string representation of the object
print(OBReadConsentResponse1Data.to_json())

# convert the object into a dict
ob_read_consent_response1_data_dict = ob_read_consent_response1_data_instance.to_dict()
# create an instance of OBReadConsentResponse1Data from a dict
ob_read_consent_response1_data_from_dict = OBReadConsentResponse1Data.from_dict(ob_read_consent_response1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


