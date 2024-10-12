# OBReadConsent1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date_time** | **datetime** | Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**permissions** | **List[str]** |  | 
**transaction_from_date_time** | **datetime** | Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**transaction_to_date_time** | **datetime** | Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_read_consent1_data import OBReadConsent1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadConsent1Data from a JSON string
ob_read_consent1_data_instance = OBReadConsent1Data.from_json(json)
# print the JSON string representation of the object
print(OBReadConsent1Data.to_json())

# convert the object into a dict
ob_read_consent1_data_dict = ob_read_consent1_data_instance.to_dict()
# create an instance of OBReadConsent1Data from a dict
ob_read_consent1_data_from_dict = OBReadConsent1Data.from_dict(ob_read_consent1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


