# Link

URL item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thumbnail_url** | **str** | URL of a thumbnail image of the target URL. Read-only. | [optional] 
**title** | **str** | Title of the target of the URL. Read-only. | [optional] 
**url** | **str** | URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters. | [optional] 

## Example

```python
from openapi_client.models.link import Link

# TODO update the JSON string below
json = "{}"
# create an instance of Link from a JSON string
link_instance = Link.from_json(json)
# print the JSON string representation of the object
print(Link.to_json())

# convert the object into a dict
link_dict = link_instance.to_dict()
# create an instance of Link from a dict
link_from_dict = Link.from_dict(link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


