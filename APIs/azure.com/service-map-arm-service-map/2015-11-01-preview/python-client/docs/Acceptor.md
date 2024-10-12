# Acceptor

A process accepting on a port.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AcceptorProperties**](AcceptorProperties.md) |  | [optional] 
**kind** | **str** | Additional resource type qualifier. | 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.acceptor import Acceptor

# TODO update the JSON string below
json = "{}"
# create an instance of Acceptor from a JSON string
acceptor_instance = Acceptor.from_json(json)
# print the JSON string representation of the object
print(Acceptor.to_json())

# convert the object into a dict
acceptor_dict = acceptor_instance.to_dict()
# create an instance of Acceptor from a dict
acceptor_from_dict = Acceptor.from_dict(acceptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


