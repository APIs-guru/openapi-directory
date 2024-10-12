# AcmeTxtRecord

The TXT record message that represents an ACME DNS-01 challenge.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry. | [optional] 
**fqdn** | **str** | The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request. | [optional] 
**update_time** | **str** | Output only. The time when this record was last updated. This will be in UTC time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.acme_txt_record import AcmeTxtRecord

# TODO update the JSON string below
json = "{}"
# create an instance of AcmeTxtRecord from a JSON string
acme_txt_record_instance = AcmeTxtRecord.from_json(json)
# print the JSON string representation of the object
print(AcmeTxtRecord.to_json())

# convert the object into a dict
acme_txt_record_dict = acme_txt_record_instance.to_dict()
# create an instance of AcmeTxtRecord from a dict
acme_txt_record_from_dict = AcmeTxtRecord.from_dict(acme_txt_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


