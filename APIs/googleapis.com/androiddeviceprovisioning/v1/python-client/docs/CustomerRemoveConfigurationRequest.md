# CustomerRemoveConfigurationRequest

Request message for customer to remove the configuration from device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**DeviceReference**](DeviceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_remove_configuration_request import CustomerRemoveConfigurationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerRemoveConfigurationRequest from a JSON string
customer_remove_configuration_request_instance = CustomerRemoveConfigurationRequest.from_json(json)
# print the JSON string representation of the object
print(CustomerRemoveConfigurationRequest.to_json())

# convert the object into a dict
customer_remove_configuration_request_dict = customer_remove_configuration_request_instance.to_dict()
# create an instance of CustomerRemoveConfigurationRequest from a dict
customer_remove_configuration_request_from_dict = CustomerRemoveConfigurationRequest.from_dict(customer_remove_configuration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


