# VolumeResourceDescriptionList

A pageable list of volume resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[VolumeResourceDescription]**](VolumeResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.volume_resource_description_list import VolumeResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeResourceDescriptionList from a JSON string
volume_resource_description_list_instance = VolumeResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(VolumeResourceDescriptionList.to_json())

# convert the object into a dict
volume_resource_description_list_dict = volume_resource_description_list_instance.to_dict()
# create an instance of VolumeResourceDescriptionList from a dict
volume_resource_description_list_from_dict = VolumeResourceDescriptionList.from_dict(volume_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


