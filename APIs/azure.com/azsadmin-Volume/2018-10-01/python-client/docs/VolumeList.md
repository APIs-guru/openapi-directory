# VolumeList

Pageable list of storage volumes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[Volume]**](Volume.md) | List of storage volumes. | [optional] 

## Example

```python
from openapi_client.models.volume_list import VolumeList

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeList from a JSON string
volume_list_instance = VolumeList.from_json(json)
# print the JSON string representation of the object
print(VolumeList.to_json())

# convert the object into a dict
volume_list_dict = volume_list_instance.to_dict()
# create an instance of VolumeList from a dict
volume_list_from_dict = VolumeList.from_dict(volume_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


