# VolumeSearchInfo

Search result information related to this volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text_snippet** | **str** | A text snippet containing the search query. | [optional] 

## Example

```python
from openapi_client.models.volume_search_info import VolumeSearchInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeSearchInfo from a JSON string
volume_search_info_instance = VolumeSearchInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeSearchInfo.to_json())

# convert the object into a dict
volume_search_info_dict = volume_search_info_instance.to_dict()
# create an instance of VolumeSearchInfo from a dict
volume_search_info_from_dict = VolumeSearchInfo.from_dict(volume_search_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


