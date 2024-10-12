# ApplicationGatewayProbePropertiesFormat

Properties of probe of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Host to send probe to  | [optional] 
**interval** | **int** | Probing interval in seconds  | [optional] 
**path** | **str** | Relative path of probe  | [optional] 
**protocol** | **str** | Protocol | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource Updating/Deleting/Failed | [optional] 
**timeout** | **int** | Probing timeout in seconds  | [optional] 
**unhealthy_threshold** | **int** | Probing unhealthy threshold  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_probe_properties_format import ApplicationGatewayProbePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayProbePropertiesFormat from a JSON string
application_gateway_probe_properties_format_instance = ApplicationGatewayProbePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayProbePropertiesFormat.to_json())

# convert the object into a dict
application_gateway_probe_properties_format_dict = application_gateway_probe_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayProbePropertiesFormat from a dict
application_gateway_probe_properties_format_from_dict = ApplicationGatewayProbePropertiesFormat.from_dict(application_gateway_probe_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


