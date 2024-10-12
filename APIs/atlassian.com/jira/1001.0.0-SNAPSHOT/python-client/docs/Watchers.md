# Watchers

The details of watchers on an issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_watching** | **bool** | Whether the calling user is watching this issue. | [optional] [readonly] 
**var_self** | **str** | The URL of these issue watcher details. | [optional] [readonly] 
**watch_count** | **int** | The number of users watching this issue. | [optional] [readonly] 
**watchers** | [**List[UserDetails]**](UserDetails.md) | Details of the users watching this issue. | [optional] [readonly] 

## Example

```python
from openapi_client.models.watchers import Watchers

# TODO update the JSON string below
json = "{}"
# create an instance of Watchers from a JSON string
watchers_instance = Watchers.from_json(json)
# print the JSON string representation of the object
print(Watchers.to_json())

# convert the object into a dict
watchers_dict = watchers_instance.to_dict()
# create an instance of Watchers from a dict
watchers_from_dict = Watchers.from_dict(watchers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


