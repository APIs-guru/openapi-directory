# SavedFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_types** | **List[str]** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**enabled** | **bool** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parameters** | **object** |  | 
**shared** | **bool** |  | [optional] 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**user** | **int** |  | [optional] 
**weight** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.saved_filter import SavedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SavedFilter from a JSON string
saved_filter_instance = SavedFilter.from_json(json)
# print the JSON string representation of the object
print(SavedFilter.to_json())

# convert the object into a dict
saved_filter_dict = saved_filter_instance.to_dict()
# create an instance of SavedFilter from a dict
saved_filter_from_dict = SavedFilter.from_dict(saved_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


