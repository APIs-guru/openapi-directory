# OrderParametersServiceOffering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_control_parameters** | **object** | The provider specific parameters needed to provision this service. This might include namespaces, special keys | [optional] 
**service_parameters** | **object** | JSON object with provisioning parameters | [optional] 
**service_plan_id** | **str** | ID of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.order_parameters_service_offering import OrderParametersServiceOffering

# TODO update the JSON string below
json = "{}"
# create an instance of OrderParametersServiceOffering from a JSON string
order_parameters_service_offering_instance = OrderParametersServiceOffering.from_json(json)
# print the JSON string representation of the object
print(OrderParametersServiceOffering.to_json())

# convert the object into a dict
order_parameters_service_offering_dict = order_parameters_service_offering_instance.to_dict()
# create an instance of OrderParametersServiceOffering from a dict
order_parameters_service_offering_from_dict = OrderParametersServiceOffering.from_dict(order_parameters_service_offering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


