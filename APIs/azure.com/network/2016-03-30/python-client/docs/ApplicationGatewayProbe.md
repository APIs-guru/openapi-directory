# ApplicationGatewayProbe

Probe of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ApplicationGatewayProbePropertiesFormat**](ApplicationGatewayProbePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.application_gateway_probe import ApplicationGatewayProbe

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayProbe from a JSON string
application_gateway_probe_instance = ApplicationGatewayProbe.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayProbe.to_json())

# convert the object into a dict
application_gateway_probe_dict = application_gateway_probe_instance.to_dict()
# create an instance of ApplicationGatewayProbe from a dict
application_gateway_probe_from_dict = ApplicationGatewayProbe.from_dict(application_gateway_probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


