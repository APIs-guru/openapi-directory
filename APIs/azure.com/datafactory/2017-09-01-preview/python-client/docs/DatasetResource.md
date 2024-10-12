# DatasetResource

Dataset resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, object]** | The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dataset_resource import DatasetResource

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetResource from a JSON string
dataset_resource_instance = DatasetResource.from_json(json)
# print the JSON string representation of the object
print(DatasetResource.to_json())

# convert the object into a dict
dataset_resource_dict = dataset_resource_instance.to_dict()
# create an instance of DatasetResource from a dict
dataset_resource_from_dict = DatasetResource.from_dict(dataset_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


