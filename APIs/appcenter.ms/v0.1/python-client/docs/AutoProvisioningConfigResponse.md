# AutoProvisioningConfigResponse

A response from API containing information for a Auto Provisioning Config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_auto_provisioning** | **bool** | When *true* enables auto provisioning | [optional] 
**app_id** | **str** | The identifier of the App. | [optional] 
**apple_developer_account_key** | **str** | A key to a secret in customer-credential-store. apple_developer_account refers to the user&#39;s developer account that is used to log into https://developer.apple.com. Normally the user&#39;s email. | [optional] 
**apple_distribution_certificate_key** | **str** | A key to a secret in customer-credential-store. distribution_certificate refers to the cusomer&#39;s certificate (that holds the private key) that will be used to sign the app. | [optional] 
**destination_id** | **str** | The identifier of the destination. | [optional] 
**id** | **float** | The identifier of the config. | [optional] 

## Example

```python
from openapi_client.models.auto_provisioning_config_response import AutoProvisioningConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AutoProvisioningConfigResponse from a JSON string
auto_provisioning_config_response_instance = AutoProvisioningConfigResponse.from_json(json)
# print the JSON string representation of the object
print(AutoProvisioningConfigResponse.to_json())

# convert the object into a dict
auto_provisioning_config_response_dict = auto_provisioning_config_response_instance.to_dict()
# create an instance of AutoProvisioningConfigResponse from a dict
auto_provisioning_config_response_from_dict = AutoProvisioningConfigResponse.from_dict(auto_provisioning_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


