# RecordSetProperties

Represents the properties of the records in the RecordSet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aaaa_records** | [**List[AaaaRecord]**](AaaaRecord.md) | Gets or sets the list of AAAA records in the RecordSet. | [optional] 
**a_records** | [**List[ARecord]**](ARecord.md) | Gets or sets the list of A records in the RecordSet. | [optional] 
**cname_record** | [**CnameRecord**](CnameRecord.md) |  | [optional] 
**mx_records** | [**List[MxRecord]**](MxRecord.md) | Gets or sets the list of MX records in the RecordSet. | [optional] 
**ns_records** | [**List[NsRecord]**](NsRecord.md) | Gets or sets the list of NS records in the RecordSet. | [optional] 
**ptr_records** | [**List[PtrRecord]**](PtrRecord.md) | Gets or sets the list of PTR records in the RecordSet. | [optional] 
**soa_record** | [**SoaRecord**](SoaRecord.md) |  | [optional] 
**srv_records** | [**List[SrvRecord]**](SrvRecord.md) | Gets or sets the list of SRV records in the RecordSet. | [optional] 
**ttl** | **int** | Gets or sets the TTL of the records in the RecordSet. | [optional] 
**txt_records** | [**List[TxtRecord]**](TxtRecord.md) | Gets or sets the list of TXT records in the RecordSet. | [optional] 

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


