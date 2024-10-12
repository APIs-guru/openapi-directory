# DatasetDebugResource

Dataset debug resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. | 
**name** | **str** | The resource name. | [optional] 

## Example

```python
from openapi_client.models.dataset_debug_resource import DatasetDebugResource

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetDebugResource from a JSON string
dataset_debug_resource_instance = DatasetDebugResource.from_json(json)
# print the JSON string representation of the object
print(DatasetDebugResource.to_json())

# convert the object into a dict
dataset_debug_resource_dict = dataset_debug_resource_instance.to_dict()
# create an instance of DatasetDebugResource from a dict
dataset_debug_resource_from_dict = DatasetDebugResource.from_dict(dataset_debug_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


