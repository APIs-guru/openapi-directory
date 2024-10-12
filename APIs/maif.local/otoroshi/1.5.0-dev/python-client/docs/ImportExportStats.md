# ImportExportStats

Global stats for the current Otoroshi instances

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calls** | **int** | Number of calls to Otoroshi globally | 
**data_in** | **int** | The amount of data sent to Otoroshi globally | 
**data_out** | **int** | The amount of data sent from Otoroshi globally | 

## Example

```python
from openapi_client.models.import_export_stats import ImportExportStats

# TODO update the JSON string below
json = "{}"
# create an instance of ImportExportStats from a JSON string
import_export_stats_instance = ImportExportStats.from_json(json)
# print the JSON string representation of the object
print(ImportExportStats.to_json())

# convert the object into a dict
import_export_stats_dict = import_export_stats_instance.to_dict()
# create an instance of ImportExportStats from a dict
import_export_stats_from_dict = ImportExportStats.from_dict(import_export_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


