# RichLinkProperties

Properties specific to a RichLink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **str** | Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the RichLink, if there&#39;s one (for example, when it&#39;s a file in Drive). | [optional] [readonly] 
**title** | **str** | Output only. The title of the RichLink as displayed in the link. This title matches the title of the linked resource at the time of the insertion or last update of the link. This field is always present. | [optional] [readonly] 
**uri** | **str** | Output only. The URI to the RichLink. This is always present. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rich_link_properties import RichLinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RichLinkProperties from a JSON string
rich_link_properties_instance = RichLinkProperties.from_json(json)
# print the JSON string representation of the object
print(RichLinkProperties.to_json())

# convert the object into a dict
rich_link_properties_dict = rich_link_properties_instance.to_dict()
# create an instance of RichLinkProperties from a dict
rich_link_properties_from_dict = RichLinkProperties.from_dict(rich_link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


