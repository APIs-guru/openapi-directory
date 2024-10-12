# SoaRecord

An SOA record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email contact for this SOA record. | [optional] 
**expire_time** | **int** | The expire time for this SOA record. | [optional] 
**host** | **str** | The domain name of the authoritative name server for this SOA record. | [optional] 
**minimum_ttl** | **int** | The minimum value for this SOA record. By convention this is used to determine the negative caching duration. | [optional] 
**refresh_time** | **int** | The refresh value for this SOA record. | [optional] 
**retry_time** | **int** | The retry time for this SOA record. | [optional] 
**serial_number** | **int** | The serial number for this SOA record. | [optional] 

## Example

```python
from openapi_client.models.soa_record import SoaRecord

# TODO update the JSON string below
json = "{}"
# create an instance of SoaRecord from a JSON string
soa_record_instance = SoaRecord.from_json(json)
# print the JSON string representation of the object
print(SoaRecord.to_json())

# convert the object into a dict
soa_record_dict = soa_record_instance.to_dict()
# create an instance of SoaRecord from a dict
soa_record_from_dict = SoaRecord.from_dict(soa_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


