# UsageCollection

Collection of usages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[Usage]**](Usage.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.usage_collection import UsageCollection

# TODO update the JSON string below
json = "{}"
# create an instance of UsageCollection from a JSON string
usage_collection_instance = UsageCollection.from_json(json)
# print the JSON string representation of the object
print(UsageCollection.to_json())

# convert the object into a dict
usage_collection_dict = usage_collection_instance.to_dict()
# create an instance of UsageCollection from a dict
usage_collection_from_dict = UsageCollection.from_dict(usage_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


