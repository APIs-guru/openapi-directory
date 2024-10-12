# ContinuousDataExport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the continuous data export. | [optional] 
**enabled** | **bool** | Boolean indicating whether the continuous data export should be running or not. | 
**endpoint** | [**Endpoint**](Endpoint.md) |  | 
**etag** | **str** | ETag used to prevent conflict in continuous data export updates. | [optional] 
**id** | **str** | Unique ID of the continuous data export. | [optional] [readonly] 
**sources** | **List[str]** | Data sources to export to the endpoint. | 
**status** | **str** | Indicates whether the continuous data export is starting, running, etc. | [optional] [readonly] 

## Example

```python
from openapi_client.models.continuous_data_export import ContinuousDataExport

# TODO update the JSON string below
json = "{}"
# create an instance of ContinuousDataExport from a JSON string
continuous_data_export_instance = ContinuousDataExport.from_json(json)
# print the JSON string representation of the object
print(ContinuousDataExport.to_json())

# convert the object into a dict
continuous_data_export_dict = continuous_data_export_instance.to_dict()
# create an instance of ContinuousDataExport from a dict
continuous_data_export_from_dict = ContinuousDataExport.from_dict(continuous_data_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


