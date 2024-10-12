# InputEndpoint

Azure VM input endpoint details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_name** | **str** | The input endpoint name. | [optional] 
**private_port** | **int** | The input endpoint private port. | [optional] 
**protocol** | **str** | The input endpoint protocol. | [optional] 
**public_port** | **int** | The input endpoint public port. | [optional] 

## Example

```python
from openapi_client.models.input_endpoint import InputEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of InputEndpoint from a JSON string
input_endpoint_instance = InputEndpoint.from_json(json)
# print the JSON string representation of the object
print(InputEndpoint.to_json())

# convert the object into a dict
input_endpoint_dict = input_endpoint_instance.to_dict()
# create an instance of InputEndpoint from a dict
input_endpoint_from_dict = InputEndpoint.from_dict(input_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


