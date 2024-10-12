# VolumeseriesinfoVolumeSeriesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue** | [**List[VolumeseriesinfoVolumeSeriesInnerIssueInner]**](VolumeseriesinfoVolumeSeriesInnerIssueInner.md) | List of issues. Applicable only for Collection Edition and Omnibus. | [optional] 
**order_number** | **int** | The book order number in the series. | [optional] 
**series_book_type** | **str** | The book type in the context of series. Examples - Single Issue, Collection Edition, etc. | [optional] 
**series_id** | **str** | The series id. | [optional] 

## Example

```python
from openapi_client.models.volumeseriesinfo_volume_series_inner import VolumeseriesinfoVolumeSeriesInner

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeseriesinfoVolumeSeriesInner from a JSON string
volumeseriesinfo_volume_series_inner_instance = VolumeseriesinfoVolumeSeriesInner.from_json(json)
# print the JSON string representation of the object
print(VolumeseriesinfoVolumeSeriesInner.to_json())

# convert the object into a dict
volumeseriesinfo_volume_series_inner_dict = volumeseriesinfo_volume_series_inner_instance.to_dict()
# create an instance of VolumeseriesinfoVolumeSeriesInner from a dict
volumeseriesinfo_volume_series_inner_from_dict = VolumeseriesinfoVolumeSeriesInner.from_dict(volumeseriesinfo_volume_series_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


