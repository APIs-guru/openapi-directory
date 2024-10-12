# CustomerSettings

Represents settings at a customer level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_logging_settings** | [**AuditLoggingSettings**](AuditLoggingSettings.md) |  | [optional] 
**vpc_settings** | [**VPCSettings**](VPCSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_settings import CustomerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSettings from a JSON string
customer_settings_instance = CustomerSettings.from_json(json)
# print the JSON string representation of the object
print(CustomerSettings.to_json())

# convert the object into a dict
customer_settings_dict = customer_settings_instance.to_dict()
# create an instance of CustomerSettings from a dict
customer_settings_from_dict = CustomerSettings.from_dict(customer_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


