# CsvSerialization

Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CsvSerializationProperties**](CsvSerializationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.csv_serialization import CsvSerialization

# TODO update the JSON string below
json = "{}"
# create an instance of CsvSerialization from a JSON string
csv_serialization_instance = CsvSerialization.from_json(json)
# print the JSON string representation of the object
print(CsvSerialization.to_json())

# convert the object into a dict
csv_serialization_dict = csv_serialization_instance.to_dict()
# create an instance of CsvSerialization from a dict
csv_serialization_from_dict = CsvSerialization.from_dict(csv_serialization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


