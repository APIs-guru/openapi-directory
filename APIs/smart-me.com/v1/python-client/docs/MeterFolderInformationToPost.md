# MeterFolderInformationToPost

Container for a Meter or Folder Information to Post

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the device or folder | [optional] 
**name** | **str** | Name of the Meter or Folder | [optional] 

## Example

```python
from openapi_client.models.meter_folder_information_to_post import MeterFolderInformationToPost

# TODO update the JSON string below
json = "{}"
# create an instance of MeterFolderInformationToPost from a JSON string
meter_folder_information_to_post_instance = MeterFolderInformationToPost.from_json(json)
# print the JSON string representation of the object
print(MeterFolderInformationToPost.to_json())

# convert the object into a dict
meter_folder_information_to_post_dict = meter_folder_information_to_post_instance.to_dict()
# create an instance of MeterFolderInformationToPost from a dict
meter_folder_information_to_post_from_dict = MeterFolderInformationToPost.from_dict(meter_folder_information_to_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


