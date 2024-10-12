# DsRecord

Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The algorithm used to generate the referenced DNSKEY. | [optional] 
**digest** | **str** | The digest generated from the referenced DNSKEY. | [optional] 
**digest_type** | **str** | The hash function used to generate the digest of the referenced DNSKEY. | [optional] 
**key_tag** | **int** | The key tag of the record. Must be set in range 0 -- 65535. | [optional] 

## Example

```python
from openapi_client.models.ds_record import DsRecord

# TODO update the JSON string below
json = "{}"
# create an instance of DsRecord from a JSON string
ds_record_instance = DsRecord.from_json(json)
# print the JSON string representation of the object
print(DsRecord.to_json())

# convert the object into a dict
ds_record_dict = ds_record_instance.to_dict()
# create an instance of DsRecord from a dict
ds_record_from_dict = DsRecord.from_dict(ds_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


