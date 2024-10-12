# Link

A hypertext link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_object_id** | **str** | If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist. | [optional] 
**relative_link** | **str** | If set, indicates this is a link to a slide in this presentation, addressed by its position. | [optional] 
**slide_index** | **int** | If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index. | [optional] 
**url** | **str** | If set, indicates this is a link to the external web page at this URL. | [optional] 

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


