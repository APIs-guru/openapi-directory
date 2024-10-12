# ApplicationGatewayAutoscaleBounds

Application Gateway autoscale bounds on number of Application Gateway instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **int** | Upper bound on number of Application Gateway instances. | 
**min** | **int** | Lower bound on number of Application Gateway instances. | 

## Example

```python
from openapi_client.models.application_gateway_autoscale_bounds import ApplicationGatewayAutoscaleBounds

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayAutoscaleBounds from a JSON string
application_gateway_autoscale_bounds_instance = ApplicationGatewayAutoscaleBounds.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayAutoscaleBounds.to_json())

# convert the object into a dict
application_gateway_autoscale_bounds_dict = application_gateway_autoscale_bounds_instance.to_dict()
# create an instance of ApplicationGatewayAutoscaleBounds from a dict
application_gateway_autoscale_bounds_from_dict = ApplicationGatewayAutoscaleBounds.from_dict(application_gateway_autoscale_bounds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


