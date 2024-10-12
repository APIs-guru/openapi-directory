# SpaceExternalAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment** | [**SpaceAttachment**](SpaceAttachment.md) |  | [optional] 
**download_location** | **str** | the location of the download | [optional] 
**preview_location** | **str** | the location of the preview | [optional] 
**share_link_token** | **str** | The share link token | [optional] 
**type** | **str** | the type | [optional] 

## Example

```python
from openapi_client.models.space_external_attachment import SpaceExternalAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceExternalAttachment from a JSON string
space_external_attachment_instance = SpaceExternalAttachment.from_json(json)
# print the JSON string representation of the object
print(SpaceExternalAttachment.to_json())

# convert the object into a dict
space_external_attachment_dict = space_external_attachment_instance.to_dict()
# create an instance of SpaceExternalAttachment from a dict
space_external_attachment_from_dict = SpaceExternalAttachment.from_dict(space_external_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


