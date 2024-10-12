# DatasetReference

Dataset reference type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, object]** | An object mapping parameter names to argument values. | [optional] 
**reference_name** | **str** | Reference dataset name. | 
**type** | **str** | Dataset reference type. | 

## Example

```python
from openapi_client.models.dataset_reference import DatasetReference

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetReference from a JSON string
dataset_reference_instance = DatasetReference.from_json(json)
# print the JSON string representation of the object
print(DatasetReference.to_json())

# convert the object into a dict
dataset_reference_dict = dataset_reference_instance.to_dict()
# create an instance of DatasetReference from a dict
dataset_reference_from_dict = DatasetReference.from_dict(dataset_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


