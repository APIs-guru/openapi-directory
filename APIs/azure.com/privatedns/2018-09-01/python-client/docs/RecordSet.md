# RecordSet

Describes a DNS record set (a collection of DNS records with the same name and type) in a Private DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the record set. | [optional] 
**id** | **str** | The ID of the record set. | [optional] [readonly] 
**name** | **str** | The name of the record set. | [optional] [readonly] 
**properties** | [**RecordSetProperties**](RecordSetProperties.md) |  | [optional] 
**type** | **str** | The type of the record set. | [optional] [readonly] 

## Example

```python
from openapi_client.models.record_set import RecordSet

# TODO update the JSON string below
json = "{}"
# create an instance of RecordSet from a JSON string
record_set_instance = RecordSet.from_json(json)
# print the JSON string representation of the object
print(RecordSet.to_json())

# convert the object into a dict
record_set_dict = record_set_instance.to_dict()
# create an instance of RecordSet from a dict
record_set_from_dict = RecordSet.from_dict(record_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


