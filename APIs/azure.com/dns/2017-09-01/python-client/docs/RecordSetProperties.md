# RecordSetProperties

Represents the properties of the records in the record set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aaaa_records** | [**List[AaaaRecord]**](AaaaRecord.md) | The list of AAAA records in the record set. | [optional] 
**a_records** | [**List[ARecord]**](ARecord.md) | The list of A records in the record set. | [optional] 
**cname_record** | [**CnameRecord**](CnameRecord.md) |  | [optional] 
**mx_records** | [**List[MxRecord]**](MxRecord.md) | The list of MX records in the record set. | [optional] 
**ns_records** | [**List[NsRecord]**](NsRecord.md) | The list of NS records in the record set. | [optional] 
**ptr_records** | [**List[PtrRecord]**](PtrRecord.md) | The list of PTR records in the record set. | [optional] 
**soa_record** | [**SoaRecord**](SoaRecord.md) |  | [optional] 
**srv_records** | [**List[SrvRecord]**](SrvRecord.md) | The list of SRV records in the record set. | [optional] 
**ttl** | **int** | The TTL (time-to-live) of the records in the record set. | [optional] 
**txt_records** | [**List[TxtRecord]**](TxtRecord.md) | The list of TXT records in the record set. | [optional] 
**caa_records** | [**List[CaaRecord]**](CaaRecord.md) | The list of CAA records in the record set. | [optional] 
**fqdn** | **str** | Fully qualified domain name of the record set. | [optional] [readonly] 
**metadata** | **Dict[str, str]** | The metadata attached to the record set. | [optional] 

## Example

```python
from openapi_client.models.record_set_properties import RecordSetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecordSetProperties from a JSON string
record_set_properties_instance = RecordSetProperties.from_json(json)
# print the JSON string representation of the object
print(RecordSetProperties.to_json())

# convert the object into a dict
record_set_properties_dict = record_set_properties_instance.to_dict()
# create an instance of RecordSetProperties from a dict
record_set_properties_from_dict = RecordSetProperties.from_dict(record_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


