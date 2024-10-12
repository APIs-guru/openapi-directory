# ContinuousDataExportCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next page of continuous data exports. | [optional] 
**value** | [**List[ContinuousDataExport]**](ContinuousDataExport.md) | The collection of continuous data exports. | 

## Example

```python
from openapi_client.models.continuous_data_export_collection import ContinuousDataExportCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousDataExportCollection from a JSON string
continuous_data_export_collection_instance = ContinuousDataExportCollection.from_json(json)
# print the JSON string representation of the object
print(ContinuousDataExportCollection.to_json())

# convert the object into a dict
continuous_data_export_collection_dict = continuous_data_export_collection_instance.to_dict()
# create an instance of ContinuousDataExportCollection from a dict
continuous_data_export_collection_from_dict = ContinuousDataExportCollection.from_dict(continuous_data_export_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


