# Layer

Layer holds metadata specific to a layer of a Docker image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **str** | The recovered arguments to the Dockerfile directive. | [optional] 
**directive** | **str** | Required. The recovered Dockerfile directive used to construct this layer. | [optional] 

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


