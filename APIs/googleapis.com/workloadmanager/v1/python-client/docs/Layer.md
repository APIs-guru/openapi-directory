# Layer

The database layer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type** | **str** | the application layer | [optional] 
**database_type** | **str** | Optional. the database layer | [optional] 
**instances** | [**List[Instance]**](Instance.md) | Optional. instances in a layer | [optional] 
**sid** | **str** | Output only. system identification of a layer | [optional] [readonly] 

## Example

```python
from openapi_client.models.layer import Layer

# TODO update the JSON string below
json = "{}"
# create an instance of Layer from a JSON string
layer_instance = Layer.from_json(json)
# print the JSON string representation of the object
print(Layer.to_json())

# convert the object into a dict
layer_dict = layer_instance.to_dict()
# create an instance of Layer from a dict
layer_from_dict = Layer.from_dict(layer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


