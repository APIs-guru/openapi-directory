# ConnectionGatewayReference

The gateway installation reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource reference location | [optional] 
**name** | **str** | Resource reference name | [optional] 
**id** | **str** | Resource reference id | [optional] 
**type** | **str** | Resource reference type | [optional] 

## Example

```python
from openapi_client.models.connection_gateway_reference import ConnectionGatewayReference

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionGatewayReference from a JSON string
connection_gateway_reference_instance = ConnectionGatewayReference.from_json(json)
# print the JSON string representation of the object
print(ConnectionGatewayReference.to_json())

# convert the object into a dict
connection_gateway_reference_dict = connection_gateway_reference_instance.to_dict()
# create an instance of ConnectionGatewayReference from a dict
connection_gateway_reference_from_dict = ConnectionGatewayReference.from_dict(connection_gateway_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


