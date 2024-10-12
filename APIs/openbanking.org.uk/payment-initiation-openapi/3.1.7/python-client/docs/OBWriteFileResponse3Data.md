# OBWriteFileResponse3Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charges** | [**List[OBWriteDomesticConsentResponse5DataChargesInner]**](OBWriteDomesticConsentResponse5DataChargesInner.md) |  | [optional] 
**consent_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource. | 
**creation_date_time** | **datetime** | Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**debtor** | [**OBCashAccountDebtor4**](OBCashAccountDebtor4.md) |  | [optional] 
**file_payment_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the file payment resource. | 
**initiation** | [**OBWriteFile2DataInitiation**](OBWriteFile2DataInitiation.md) |  | 
**multi_authorisation** | [**OBWriteDomesticResponse5DataMultiAuthorisation**](OBWriteDomesticResponse5DataMultiAuthorisation.md) |  | [optional] 
**status** | **str** | Specifies the status of the payment order resource. | 
**status_update_date_time** | **datetime** | Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 

## Example

```python
from openapi_client.models.ob_write_file_response3_data import OBWriteFileResponse3Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFileResponse3Data from a JSON string
ob_write_file_response3_data_instance = OBWriteFileResponse3Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteFileResponse3Data.to_json())

# convert the object into a dict
ob_write_file_response3_data_dict = ob_write_file_response3_data_instance.to_dict()
# create an instance of OBWriteFileResponse3Data from a dict
ob_write_file_response3_data_from_dict = OBWriteFileResponse3Data.from_dict(ob_write_file_response3_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


