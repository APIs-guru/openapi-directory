# MonitorsCollection

Model for collection of Monitor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL for next set of results. | [optional] [readonly] 
**value** | [**List[Monitor]**](Monitor.md) | Collection of Monitor. | [optional] [readonly] 

## Example

```python
from openapi_client.models.monitors_collection import MonitorsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorsCollection from a JSON string
monitors_collection_instance = MonitorsCollection.from_json(json)
# print the JSON string representation of the object
print(MonitorsCollection.to_json())

# convert the object into a dict
monitors_collection_dict = monitors_collection_instance.to_dict()
# create an instance of MonitorsCollection from a dict
monitors_collection_from_dict = MonitorsCollection.from_dict(monitors_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


