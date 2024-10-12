# ProcessCollection

Collection of Process resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[Process]**](Process.md) | Collection of Process resources. | [optional] 

## Example

```python
from openapi_client.models.process_collection import ProcessCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessCollection from a JSON string
process_collection_instance = ProcessCollection.from_json(json)
# print the JSON string representation of the object
print(ProcessCollection.to_json())

# convert the object into a dict
process_collection_dict = process_collection_instance.to_dict()
# create an instance of ProcessCollection from a dict
process_collection_from_dict = ProcessCollection.from_dict(process_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


