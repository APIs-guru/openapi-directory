# ModelOperationMetadata

This is returned in the longrunning operations for create/update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_operation_status** | **str** |  | [optional] 
**name** | **str** | The name of the model we are creating/updating The name must have the form &#x60;projects/{project_id}/models/{model_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.model_operation_metadata import ModelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ModelOperationMetadata from a JSON string
model_operation_metadata_instance = ModelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ModelOperationMetadata.to_json())

# convert the object into a dict
model_operation_metadata_dict = model_operation_metadata_instance.to_dict()
# create an instance of ModelOperationMetadata from a dict
model_operation_metadata_from_dict = ModelOperationMetadata.from_dict(model_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


