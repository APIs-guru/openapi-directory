# ShowStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enddate** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**years_on** | **str** |  | [optional] 
**imdb_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tvdb_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.show_status import ShowStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ShowStatus from a JSON string
show_status_instance = ShowStatus.from_json(json)
# print the JSON string representation of the object
print(ShowStatus.to_json())

# convert the object into a dict
show_status_dict = show_status_instance.to_dict()
# create an instance of ShowStatus from a dict
show_status_from_dict = ShowStatus.from_dict(show_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


