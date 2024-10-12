# StructuredResult

Structured results that are returned as part of search request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person** | [**Person**](Person.md) |  | [optional] 

## Example

```python
from openapi_client.models.structured_result import StructuredResult

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredResult from a JSON string
structured_result_instance = StructuredResult.from_json(json)
# print the JSON string representation of the object
print(StructuredResult.to_json())

# convert the object into a dict
structured_result_dict = structured_result_instance.to_dict()
# create an instance of StructuredResult from a dict
structured_result_from_dict = StructuredResult.from_dict(structured_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


