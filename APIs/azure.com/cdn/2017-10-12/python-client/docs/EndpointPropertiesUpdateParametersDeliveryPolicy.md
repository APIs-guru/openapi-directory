# EndpointPropertiesUpdateParametersDeliveryPolicy

A policy that specifies the delivery rules to be used for an endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-friendly description of the policy. | [optional] 
**rules** | [**List[DeliveryRule]**](DeliveryRule.md) | A list of the delivery rules. | 

## Example

```python
from openapi_client.models.endpoint_properties_update_parameters_delivery_policy import EndpointPropertiesUpdateParametersDeliveryPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPropertiesUpdateParametersDeliveryPolicy from a JSON string
endpoint_properties_update_parameters_delivery_policy_instance = EndpointPropertiesUpdateParametersDeliveryPolicy.from_json(json)
# print the JSON string representation of the object
print(EndpointPropertiesUpdateParametersDeliveryPolicy.to_json())

# convert the object into a dict
endpoint_properties_update_parameters_delivery_policy_dict = endpoint_properties_update_parameters_delivery_policy_instance.to_dict()
# create an instance of EndpointPropertiesUpdateParametersDeliveryPolicy from a dict
endpoint_properties_update_parameters_delivery_policy_from_dict = EndpointPropertiesUpdateParametersDeliveryPolicy.from_dict(endpoint_properties_update_parameters_delivery_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


