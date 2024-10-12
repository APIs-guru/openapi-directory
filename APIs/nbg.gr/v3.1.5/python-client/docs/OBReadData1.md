# OBReadData1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date_time** | **datetime** | Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**permissions** | [**List[OBExternalPermissions1Code]**](OBExternalPermissions1Code.md) | Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP. | 
**transaction_from_date_time** | **datetime** | Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**transaction_to_date_time** | **datetime** | Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_read_data1 import OBReadData1

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadData1 from a JSON string
ob_read_data1_instance = OBReadData1.from_json(json)
# print the JSON string representation of the object
print(OBReadData1.to_json())

# convert the object into a dict
ob_read_data1_dict = ob_read_data1_instance.to_dict()
# create an instance of OBReadData1 from a dict
ob_read_data1_from_dict = OBReadData1.from_dict(ob_read_data1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


