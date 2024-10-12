# SavedView

A saved view of a table. NextId: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Internal id associated with the saved view. | [optional] 
**name** | **str** | Display name of the saved view. | [optional] 

## Example

```python
from openapi_client.models.saved_view import SavedView

# TODO update the JSON string below
json = "{}"
# create an instance of SavedView from a JSON string
saved_view_instance = SavedView.from_json(json)
# print the JSON string representation of the object
print(SavedView.to_json())

# convert the object into a dict
saved_view_dict = saved_view_instance.to_dict()
# create an instance of SavedView from a dict
saved_view_from_dict = SavedView.from_dict(saved_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


