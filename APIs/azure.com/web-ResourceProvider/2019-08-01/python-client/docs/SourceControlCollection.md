# SourceControlCollection

Collection of source controls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SourceControl]**](SourceControl.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.source_control_collection import SourceControlCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SourceControlCollection from a JSON string
source_control_collection_instance = SourceControlCollection.from_json(json)
# print the JSON string representation of the object
print(SourceControlCollection.to_json())

# convert the object into a dict
source_control_collection_dict = source_control_collection_instance.to_dict()
# create an instance of SourceControlCollection from a dict
source_control_collection_from_dict = SourceControlCollection.from_dict(source_control_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


