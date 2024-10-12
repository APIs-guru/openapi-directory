# Volumeseriesinfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**book_display_number** | **str** | The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**short_series_book_title** | **str** | Short book title in the context of the series. | [optional] 
**volume_series** | [**List[VolumeseriesinfoVolumeSeriesInner]**](VolumeseriesinfoVolumeSeriesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.volumeseriesinfo import Volumeseriesinfo

# TODO update the JSON string below
json = "{}"
# create an instance of Volumeseriesinfo from a JSON string
volumeseriesinfo_instance = Volumeseriesinfo.from_json(json)
# print the JSON string representation of the object
print(Volumeseriesinfo.to_json())

# convert the object into a dict
volumeseriesinfo_dict = volumeseriesinfo_instance.to_dict()
# create an instance of Volumeseriesinfo from a dict
volumeseriesinfo_from_dict = Volumeseriesinfo.from_dict(volumeseriesinfo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


