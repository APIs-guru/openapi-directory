# Port

The port exposed on the container group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | The port number. | 
**protocol** | **str** | The protocol associated with the port. | [optional] 

## Example

```python
from openapi_client.models.port import Port

# TODO update the JSON string below
json = "{}"
# create an instance of Port from a JSON string
port_instance = Port.from_json(json)
# print the JSON string representation of the object
print(Port.to_json())

# convert the object into a dict
port_dict = port_instance.to_dict()
# create an instance of Port from a dict
port_from_dict = Port.from_dict(port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


