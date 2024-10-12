# ContainerPort

ContainerPort represents a network port in a single container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_port** | **int** | (Optional) Port number the container listens on. This must be a valid port number, 0 &lt; x &lt; 65536. | [optional] 
**name** | **str** | (Optional) If specified, used to specify which protocol to use. Allowed values are \&quot;http1\&quot; and \&quot;h2c\&quot;. | [optional] 
**protocol** | **str** | (Optional) Protocol for port. Must be \&quot;TCP\&quot;. Defaults to \&quot;TCP\&quot;. | [optional] 

## Example

```python
from openapi_client.models.container_port import ContainerPort

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerPort from a JSON string
container_port_instance = ContainerPort.from_json(json)
# print the JSON string representation of the object
print(ContainerPort.to_json())

# convert the object into a dict
container_port_dict = container_port_instance.to_dict()
# create an instance of ContainerPort from a dict
container_port_from_dict = ContainerPort.from_dict(container_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


