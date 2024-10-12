# Gateway

Gateway represents a user facing component that serves as an entrance to enable connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Required. The type of hosting used by the gateway. | [optional] 
**uri** | **str** | Output only. Server-defined URI for this resource. | [optional] [readonly] 
**user_port** | **int** | Output only. User port reserved on the gateways for this connection, if not specified or zero, the default port is 19443. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway import Gateway

# TODO update the JSON string below
json = "{}"
# create an instance of Gateway from a JSON string
gateway_instance = Gateway.from_json(json)
# print the JSON string representation of the object
print(Gateway.to_json())

# convert the object into a dict
gateway_dict = gateway_instance.to_dict()
# create an instance of Gateway from a dict
gateway_from_dict = Gateway.from_dict(gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


