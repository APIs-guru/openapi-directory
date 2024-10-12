# InputPort

Asset input port

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Port data type. | [optional] [default to 'Dataset']

## Example

```python
from openapi_client.models.input_port import InputPort

# TODO update the JSON string below
json = "{}"
# create an instance of InputPort from a JSON string
input_port_instance = InputPort.from_json(json)
# print the JSON string representation of the object
print(InputPort.to_json())

# convert the object into a dict
input_port_dict = input_port_instance.to_dict()
# create an instance of InputPort from a dict
input_port_from_dict = InputPort.from_dict(input_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


