# NsRecord

An NS record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nsdname** | **str** | The name server name for this NS record. | [optional] 

## Example

```python
from openapi_client.models.ns_record import NsRecord

# TODO update the JSON string below
json = "{}"
# create an instance of NsRecord from a JSON string
ns_record_instance = NsRecord.from_json(json)
# print the JSON string representation of the object
print(NsRecord.to_json())

# convert the object into a dict
ns_record_dict = ns_record_instance.to_dict()
# create an instance of NsRecord from a dict
ns_record_from_dict = NsRecord.from_dict(ns_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


