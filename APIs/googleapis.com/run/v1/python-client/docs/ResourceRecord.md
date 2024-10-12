# ResourceRecord

A DNS resource record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Relative name of the object affected by this record. Only applicable for &#x60;CNAME&#x60; records. Example: &#39;www&#39;. | [optional] 
**rrdata** | **str** | Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). | [optional] 
**type** | **str** | Resource record type. Example: &#x60;AAAA&#x60;. | [optional] 

## Example

```python
from openapi_client.models.resource_record import ResourceRecord

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRecord from a JSON string
resource_record_instance = ResourceRecord.from_json(json)
# print the JSON string representation of the object
print(ResourceRecord.to_json())

# convert the object into a dict
resource_record_dict = resource_record_instance.to_dict()
# create an instance of ResourceRecord from a dict
resource_record_from_dict = ResourceRecord.from_dict(resource_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


