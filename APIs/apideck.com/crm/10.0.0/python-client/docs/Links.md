# Links

Links to navigate to previous or next pages through the API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **str** | Link to navigate to the current page through the API | [optional] 
**next** | **str** | Link to navigate to the previous page through the API | [optional] 
**previous** | **str** | Link to navigate to the previous page through the API | [optional] 

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


