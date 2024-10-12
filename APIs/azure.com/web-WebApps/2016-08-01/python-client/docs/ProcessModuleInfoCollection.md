# ProcessModuleInfoCollection

Collection of Kudu thread information elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[ProcessModuleInfo]**](ProcessModuleInfo.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.process_module_info_collection import ProcessModuleInfoCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessModuleInfoCollection from a JSON string
process_module_info_collection_instance = ProcessModuleInfoCollection.from_json(json)
# print the JSON string representation of the object
print(ProcessModuleInfoCollection.to_json())

# convert the object into a dict
process_module_info_collection_dict = process_module_info_collection_instance.to_dict()
# create an instance of ProcessModuleInfoCollection from a dict
process_module_info_collection_from_dict = ProcessModuleInfoCollection.from_dict(process_module_info_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


