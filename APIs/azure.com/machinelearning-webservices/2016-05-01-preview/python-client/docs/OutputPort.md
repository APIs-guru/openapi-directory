# OutputPort

Asset output port

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Port data type. | [optional] [default to 'Dataset']

## Example

```python
from openapi_client.models.output_port import OutputPort

# TODO update the JSON string below
json = "{}"
# create an instance of OutputPort from a JSON string
output_port_instance = OutputPort.from_json(json)
# print the JSON string representation of the object
print(OutputPort.to_json())

# convert the object into a dict
output_port_dict = output_port_instance.to_dict()
# create an instance of OutputPort from a dict
output_port_from_dict = OutputPort.from_dict(output_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


