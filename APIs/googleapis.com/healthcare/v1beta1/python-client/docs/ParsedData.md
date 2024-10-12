# ParsedData

The content of an HL7v2 message in a structured format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segments** | [**List[Segment]**](Segment.md) |  | [optional] 

## Example

```python
from openapi_client.models.parsed_data import ParsedData

# TODO update the JSON string below
json = "{}"
# create an instance of ParsedData from a JSON string
parsed_data_instance = ParsedData.from_json(json)
# print the JSON string representation of the object
print(ParsedData.to_json())

# convert the object into a dict
parsed_data_dict = parsed_data_instance.to_dict()
# create an instance of ParsedData from a dict
parsed_data_from_dict = ParsedData.from_dict(parsed_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


