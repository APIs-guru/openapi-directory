# AutoProvisioningConfigRequest

A request containing information for creating a Auto Provisioning Config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_auto_provisioning** | **bool** | When *true* enables auto provisioning | [optional] 
**apple_developer_account_key** | **str** | A key to a secret in customer-credential-store. apple_developer_account refers to the user&#39;s developer account that is used to log into https://developer.apple.com. Normally the user&#39;s email. | [optional] 
**apple_distribution_certificate_key** | **str** | A key to a secret in customer-credential-store. distribution_certificate refers to the customer&#39;s certificate (that holds the private key) that will be used to sign the app. | [optional] 

## Example

```python
from openapi_client.models.auto_provisioning_config_request import AutoProvisioningConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AutoProvisioningConfigRequest from a JSON string
auto_provisioning_config_request_instance = AutoProvisioningConfigRequest.from_json(json)
# print the JSON string representation of the object
print(AutoProvisioningConfigRequest.to_json())

# convert the object into a dict
auto_provisioning_config_request_dict = auto_provisioning_config_request_instance.to_dict()
# create an instance of AutoProvisioningConfigRequest from a dict
auto_provisioning_config_request_from_dict = AutoProvisioningConfigRequest.from_dict(auto_provisioning_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


