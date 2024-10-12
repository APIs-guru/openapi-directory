# AaaaRecord

An AAAA record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv6_address** | **str** | The IPv6 address of this AAAA record. | [optional] 

## Example

```python
from openapi_client.models.aaaa_record import AaaaRecord

# TODO update the JSON string below
json = "{}"
# create an instance of AaaaRecord from a JSON string
aaaa_record_instance = AaaaRecord.from_json(json)
# print the JSON string representation of the object
print(AaaaRecord.to_json())

# convert the object into a dict
aaaa_record_dict = aaaa_record_instance.to_dict()
# create an instance of AaaaRecord from a dict
aaaa_record_from_dict = AaaaRecord.from_dict(aaaa_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


