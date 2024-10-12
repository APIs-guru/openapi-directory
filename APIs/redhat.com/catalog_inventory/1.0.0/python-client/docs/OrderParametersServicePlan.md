# OrderParametersServicePlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_control_parameters** | **object** | The provider specific parameters needed to provision this service. This might include namespaces, special keys | [optional] 
**service_parameters** | **object** | JSON object with provisioning parameters | [optional] 

## Example

```python
from openapi_client.models.order_parameters_service_plan import OrderParametersServicePlan

# TODO update the JSON string below
json = "{}"
# create an instance of OrderParametersServicePlan from a JSON string
order_parameters_service_plan_instance = OrderParametersServicePlan.from_json(json)
# print the JSON string representation of the object
print(OrderParametersServicePlan.to_json())

# convert the object into a dict
order_parameters_service_plan_dict = order_parameters_service_plan_instance.to_dict()
# create an instance of OrderParametersServicePlan from a dict
order_parameters_service_plan_from_dict = OrderParametersServicePlan.from_dict(order_parameters_service_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


