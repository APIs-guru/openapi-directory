# GatewayResourceDescription

This type describes a gateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Gateway resource. | 
**properties** | [**GatewayProperties**](GatewayProperties.md) |  | 

## Example

```python
from openapi_client.models.gateway_resource_description import GatewayResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayResourceDescription from a JSON string
gateway_resource_description_instance = GatewayResourceDescription.from_json(json)
# print the JSON string representation of the object
print(GatewayResourceDescription.to_json())

# convert the object into a dict
gateway_resource_description_dict = gateway_resource_description_instance.to_dict()
# create an instance of GatewayResourceDescription from a dict
gateway_resource_description_from_dict = GatewayResourceDescription.from_dict(gateway_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


