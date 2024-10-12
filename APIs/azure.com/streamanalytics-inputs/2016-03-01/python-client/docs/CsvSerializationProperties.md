# CsvSerializationProperties

The properties that are associated with the CSV serialization type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | [**Encoding**](Encoding.md) |  | [optional] 
**field_delimiter** | **str** | Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.csv_serialization_properties import CsvSerializationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CsvSerializationProperties from a JSON string
csv_serialization_properties_instance = CsvSerializationProperties.from_json(json)
# print the JSON string representation of the object
print(CsvSerializationProperties.to_json())

# convert the object into a dict
csv_serialization_properties_dict = csv_serialization_properties_instance.to_dict()
# create an instance of CsvSerializationProperties from a dict
csv_serialization_properties_from_dict = CsvSerializationProperties.from_dict(csv_serialization_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


