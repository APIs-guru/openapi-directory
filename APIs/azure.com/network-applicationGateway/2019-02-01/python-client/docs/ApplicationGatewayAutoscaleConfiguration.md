# ApplicationGatewayAutoscaleConfiguration

Application Gateway autoscale configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_capacity** | **int** | Upper bound on number of Application Gateway capacity | [optional] 
**min_capacity** | **int** | Lower bound on number of Application Gateway capacity | 

## Example

```python
from openapi_client.models.application_gateway_autoscale_configuration import ApplicationGatewayAutoscaleConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayAutoscaleConfiguration from a JSON string
application_gateway_autoscale_configuration_instance = ApplicationGatewayAutoscaleConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayAutoscaleConfiguration.to_json())

# convert the object into a dict
application_gateway_autoscale_configuration_dict = application_gateway_autoscale_configuration_instance.to_dict()
# create an instance of ApplicationGatewayAutoscaleConfiguration from a dict
application_gateway_autoscale_configuration_from_dict = ApplicationGatewayAutoscaleConfiguration.from_dict(application_gateway_autoscale_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


