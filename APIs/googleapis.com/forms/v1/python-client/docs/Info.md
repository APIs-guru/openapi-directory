# Info

The general information for a form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the form. | [optional] 
**document_title** | **str** | Output only. The title of the document which is visible in Drive. If &#x60;Info.title&#x60; is empty, &#x60;document_title&#x60; may appear in its place in the Google Forms UI and be visible to responders. &#x60;document_title&#x60; can be set on create, but cannot be modified by a batchUpdate request. Please use the [Google Drive API](https://developers.google.com/drive/api/v3/reference/files/update) if you need to programmatically update &#x60;document_title&#x60;. | [optional] [readonly] 
**title** | **str** | Required. The title of the form which is visible to responders. | [optional] 

## Example

```python
from openapi_client.models.info import Info

# TODO update the JSON string below
json = "{}"
# create an instance of Info from a JSON string
info_instance = Info.from_json(json)
# print the JSON string representation of the object
print(Info.to_json())

# convert the object into a dict
info_dict = info_instance.to_dict()
# create an instance of Info from a dict
info_from_dict = Info.from_dict(info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


