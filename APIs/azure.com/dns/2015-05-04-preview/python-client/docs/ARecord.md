# ARecord

An A record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4_address** | **str** | Gets or sets the IPv4 address of this A record in string notation. | [optional] 

## Example

```python
from openapi_client.models.a_record import ARecord

# TODO update the JSON string below
json = "{}"
# create an instance of ARecord from a JSON string
a_record_instance = ARecord.from_json(json)
# print the JSON string representation of the object
print(ARecord.to_json())

# convert the object into a dict
a_record_dict = a_record_instance.to_dict()
# create an instance of ARecord from a dict
a_record_from_dict = ARecord.from_dict(a_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


