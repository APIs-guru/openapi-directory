# CsvRow

A representation of a single data row in a CSV file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **List[str]** | The data entries in a CSV file row, as a string array rather than a single comma-separated string. | [optional] 

## Example

```python
from openapi_client.models.csv_row import CsvRow

# TODO update the JSON string below
json = "{}"
# create an instance of CsvRow from a JSON string
csv_row_instance = CsvRow.from_json(json)
# print the JSON string representation of the object
print(CsvRow.to_json())

# convert the object into a dict
csv_row_dict = csv_row_instance.to_dict()
# create an instance of CsvRow from a dict
csv_row_from_dict = CsvRow.from_dict(csv_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


