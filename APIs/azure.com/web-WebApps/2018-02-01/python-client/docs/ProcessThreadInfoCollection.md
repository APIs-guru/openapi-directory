# ProcessThreadInfoCollection

Collection of Kudu thread information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ProcessThreadInfo]**](ProcessThreadInfo.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.process_thread_info_collection import ProcessThreadInfoCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessThreadInfoCollection from a JSON string
process_thread_info_collection_instance = ProcessThreadInfoCollection.from_json(json)
# print the JSON string representation of the object
print(ProcessThreadInfoCollection.to_json())

# convert the object into a dict
process_thread_info_collection_dict = process_thread_info_collection_instance.to_dict()
# create an instance of ProcessThreadInfoCollection from a dict
process_thread_info_collection_from_dict = ProcessThreadInfoCollection.from_dict(process_thread_info_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


