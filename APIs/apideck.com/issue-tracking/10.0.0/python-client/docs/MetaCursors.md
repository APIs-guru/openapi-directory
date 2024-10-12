# MetaCursors

Cursors to navigate to previous or next pages through the API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **str** | Cursor to navigate to the current page of results through the API | [optional] 
**next** | **str** | Cursor to navigate to the next page of results through the API | [optional] 
**previous** | **str** | Cursor to navigate to the previous page of results through the API | [optional] 

## Example

```python
from openapi_client.models.meta_cursors import MetaCursors

# TODO update the JSON string below
json = "{}"
# create an instance of MetaCursors from a JSON string
meta_cursors_instance = MetaCursors.from_json(json)
# print the JSON string representation of the object
print(MetaCursors.to_json())

# convert the object into a dict
meta_cursors_dict = meta_cursors_instance.to_dict()
# create an instance of MetaCursors from a dict
meta_cursors_from_dict = MetaCursors.from_dict(meta_cursors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


