# TensorFlowVersion

A tensorflow version that a Node can be configured with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The resource name. | [optional] 
**version** | **str** | the tensorflow version. | [optional] 

## Example

```python
from openapi_client.models.tensor_flow_version import TensorFlowVersion

# TODO update the JSON string below
json = "{}"
# create an instance of TensorFlowVersion from a JSON string
tensor_flow_version_instance = TensorFlowVersion.from_json(json)
# print the JSON string representation of the object
print(TensorFlowVersion.to_json())

# convert the object into a dict
tensor_flow_version_dict = tensor_flow_version_instance.to_dict()
# create an instance of TensorFlowVersion from a dict
tensor_flow_version_from_dict = TensorFlowVersion.from_dict(tensor_flow_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


