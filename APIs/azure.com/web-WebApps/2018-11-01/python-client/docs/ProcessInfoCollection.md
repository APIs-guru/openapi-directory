# ProcessInfoCollection

Collection of Kudu process information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ProcessInfo]**](ProcessInfo.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.process_info_collection import ProcessInfoCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessInfoCollection from a JSON string
process_info_collection_instance = ProcessInfoCollection.from_json(json)
# print the JSON string representation of the object
print(ProcessInfoCollection.to_json())

# convert the object into a dict
process_info_collection_dict = process_info_collection_instance.to_dict()
# create an instance of ProcessInfoCollection from a dict
process_info_collection_from_dict = ProcessInfoCollection.from_dict(process_info_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


