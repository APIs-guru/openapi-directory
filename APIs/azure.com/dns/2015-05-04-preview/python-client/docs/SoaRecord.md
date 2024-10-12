# SoaRecord

An SOA record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Gets or sets the email for this record. | [optional] 
**expire_time** | **int** | Gets or sets the expire time for this record. | [optional] 
**host** | **str** | Gets or sets the domain name of the authoritative name server, without a terminating dot. | [optional] 
**minimum_ttl** | **int** | Gets or sets the minimum TTL value for this record. | [optional] 
**refresh_time** | **int** | Gets or sets the refresh value for this record. | [optional] 
**retry_time** | **int** | Gets or sets the retry time for this record. | [optional] 
**serial_number** | **int** | Gets or sets the serial number for this record. | [optional] 

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


