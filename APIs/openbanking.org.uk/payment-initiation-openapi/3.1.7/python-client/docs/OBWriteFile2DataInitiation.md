# OBWriteFile2DataInitiation

The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_sum** | **float** | Total of all individual amounts included in the group, irrespective of currencies. | [optional] 
**debtor_account** | [**OBWriteDomestic2DataInitiationDebtorAccount**](OBWriteDomestic2DataInitiationDebtorAccount.md) |  | [optional] 
**file_hash** | **str** | A base64 encoding of a SHA256 hash of the file to be uploaded. | 
**file_reference** | **str** | Reference for the file. | [optional] 
**file_type** | **str** | Specifies the payment file type. | 
**local_instrument** | **str** | User community specific instrument. Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level. | [optional] 
**number_of_transactions** | **str** | Number of individual transactions contained in the payment information group. | [optional] 
**remittance_information** | [**OBWriteDomestic2DataInitiationRemittanceInformation**](OBWriteDomestic2DataInitiationRemittanceInformation.md) |  | [optional] 
**requested_execution_date_time** | **datetime** | Date at which the initiating party requests the clearing agent to process the payment.  Usage: This is the date on which the debtor&#39;s account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_write_file2_data_initiation import OBWriteFile2DataInitiation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFile2DataInitiation from a JSON string
ob_write_file2_data_initiation_instance = OBWriteFile2DataInitiation.from_json(json)
# print the JSON string representation of the object
print(OBWriteFile2DataInitiation.to_json())

# convert the object into a dict
ob_write_file2_data_initiation_dict = ob_write_file2_data_initiation_instance.to_dict()
# create an instance of OBWriteFile2DataInitiation from a dict
ob_write_file2_data_initiation_from_dict = OBWriteFile2DataInitiation.from_dict(ob_write_file2_data_initiation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


