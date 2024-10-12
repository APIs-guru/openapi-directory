# ScanData

ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**VisualizationData**](VisualizationData.md) |  | [optional] 
**end_time** | **str** | The upper bound for when the contained data is defined. | [optional] 
**start_time** | **str** | A range of time (inclusive) for when the contained data is defined. The lower bound for when the contained data is defined. | [optional] 

## Example

```python
from openapi_client.models.scan_data import ScanData

# TODO update the JSON string below
json = "{}"
# create an instance of ScanData from a JSON string
scan_data_instance = ScanData.from_json(json)
# print the JSON string representation of the object
print(ScanData.to_json())

# convert the object into a dict
scan_data_dict = scan_data_instance.to_dict()
# create an instance of ScanData from a dict
scan_data_from_dict = ScanData.from_dict(scan_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


