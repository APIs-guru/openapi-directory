# TensorflowConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter_server_count** | **int** | Number of parameter servers. | [optional] 
**worker_count** | **int** | The number of workers. | [optional] 

## Example

```python
from openapi_client.models.tensorflow_configuration import TensorflowConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of TensorflowConfiguration from a JSON string
tensorflow_configuration_instance = TensorflowConfiguration.from_json(json)
# print the JSON string representation of the object
print(TensorflowConfiguration.to_json())

# convert the object into a dict
tensorflow_configuration_dict = tensorflow_configuration_instance.to_dict()
# create an instance of TensorflowConfiguration from a dict
tensorflow_configuration_from_dict = TensorflowConfiguration.from_dict(tensorflow_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


