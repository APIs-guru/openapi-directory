# MetadataRecord

A complex type that defines the data records returned in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_values** | [**List[Value]**](Value.md) | A list of data in a row returned in the traffic report. The data in each of the cells match the labels in headers of the report. | [optional] 
**value** | [**Value**](Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.metadata_record import MetadataRecord

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataRecord from a JSON string
metadata_record_instance = MetadataRecord.from_json(json)
# print the JSON string representation of the object
print(MetadataRecord.to_json())

# convert the object into a dict
metadata_record_dict = metadata_record_instance.to_dict()
# create an instance of MetadataRecord from a dict
metadata_record_from_dict = MetadataRecord.from_dict(metadata_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


