# GatewayResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** |  | [optional] 
**id** | **str** | Resource Manager Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Manager Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Manager Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Manager Resource Tags. | [optional] 
**type** | **str** | Resource Manager Resource Type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gateway_resource import GatewayResource

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayResource from a JSON string
gateway_resource_instance = GatewayResource.from_json(json)
# print the JSON string representation of the object
print(GatewayResource.to_json())

# convert the object into a dict
gateway_resource_dict = gateway_resource_instance.to_dict()
# create an instance of GatewayResource from a dict
gateway_resource_from_dict = GatewayResource.from_dict(gateway_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


