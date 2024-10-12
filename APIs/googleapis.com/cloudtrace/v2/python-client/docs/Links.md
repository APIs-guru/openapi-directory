# Links

A collection of links, which are references from this span to a span in the same or different trace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropped_links_count** | **int** | The number of dropped links after the maximum size was enforced. If this value is 0, then no links were dropped. | [optional] 
**link** | [**List[Link]**](Link.md) | A collection of links. | [optional] 

## Example

```python
from openapi_client.models.links import Links

# TODO update the JSON string below
json = "{}"
# create an instance of Links from a JSON string
links_instance = Links.from_json(json)
# print the JSON string representation of the object
print(Links.to_json())

# convert the object into a dict
links_dict = links_instance.to_dict()
# create an instance of Links from a dict
links_from_dict = Links.from_dict(links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


