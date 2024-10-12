# Csv

A representation of a CSV file attachment, as a list of column headers and a list of data rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_rows** | [**List[CsvRow]**](CsvRow.md) | The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. | [optional] 
**headers** | **List[str]** | The list of headers for data columns in a CSV file. | [optional] 

## Example

```python
from openapi_client.models.csv import Csv

# TODO update the JSON string below
json = "{}"
# create an instance of Csv from a JSON string
csv_instance = Csv.from_json(json)
# print the JSON string representation of the object
print(Csv.to_json())

# convert the object into a dict
csv_dict = csv_instance.to_dict()
# create an instance of Csv from a dict
csv_from_dict = Csv.from_dict(csv_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


