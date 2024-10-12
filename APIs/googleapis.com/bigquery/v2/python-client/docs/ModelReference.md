# ModelReference

Id path of a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required. The ID of the dataset containing this model. | [optional] 
**model_id** | **str** | Required. The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. | [optional] 
**project_id** | **str** | Required. The ID of the project containing this model. | [optional] 

## Example

```python
from openapi_client.models.model_reference import ModelReference

# TODO update the JSON string below
json = "{}"
# create an instance of ModelReference from a JSON string
model_reference_instance = ModelReference.from_json(json)
# print the JSON string representation of the object
print(ModelReference.to_json())

# convert the object into a dict
model_reference_dict = model_reference_instance.to_dict()
# create an instance of ModelReference from a dict
model_reference_from_dict = ModelReference.from_dict(model_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


