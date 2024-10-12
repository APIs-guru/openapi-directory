# PageLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link URI | [optional] 
**rel** | **str** | Link descriptor (e.g. self, first, prev, next, last) | [optional] 

## Example

```python
from openapi_client.models.page_link import PageLink

# TODO update the JSON string below
json = "{}"
# create an instance of PageLink from a JSON string
page_link_instance = PageLink.from_json(json)
# print the JSON string representation of the object
print(PageLink.to_json())

# convert the object into a dict
page_link_dict = page_link_instance.to_dict()
# create an instance of PageLink from a dict
page_link_from_dict = PageLink.from_dict(page_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


