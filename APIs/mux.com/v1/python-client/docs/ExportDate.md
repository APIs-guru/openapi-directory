# ExportDate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_date** | **date** |  | [optional] 
**files** | [**List[ExportFile]**](ExportFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_date import ExportDate

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDate from a JSON string
export_date_instance = ExportDate.from_json(json)
# print the JSON string representation of the object
print(ExportDate.to_json())

# convert the object into a dict
export_date_dict = export_date_instance.to_dict()
# create an instance of ExportDate from a dict
export_date_from_dict = ExportDate.from_dict(export_date_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


