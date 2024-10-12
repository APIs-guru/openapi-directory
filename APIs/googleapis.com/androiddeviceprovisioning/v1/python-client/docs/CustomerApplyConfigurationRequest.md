# CustomerApplyConfigurationRequest

Request message for customer to assign a configuration to device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **str** | Required. The configuration applied to the device in the format &#x60;customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]&#x60;. | [optional] 
**device** | [**DeviceReference**](DeviceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_apply_configuration_request import CustomerApplyConfigurationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerApplyConfigurationRequest from a JSON string
customer_apply_configuration_request_instance = CustomerApplyConfigurationRequest.from_json(json)
# print the JSON string representation of the object
print(CustomerApplyConfigurationRequest.to_json())

# convert the object into a dict
customer_apply_configuration_request_dict = customer_apply_configuration_request_instance.to_dict()
# create an instance of CustomerApplyConfigurationRequest from a dict
customer_apply_configuration_request_from_dict = CustomerApplyConfigurationRequest.from_dict(customer_apply_configuration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


