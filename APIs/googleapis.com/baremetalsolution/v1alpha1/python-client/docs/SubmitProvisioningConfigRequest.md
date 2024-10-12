# SubmitProvisioningConfigRequest

Request for SubmitProvisioningConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Optional. Email provided to send a confirmation with provisioning config to. | [optional] 
**provisioning_config** | [**ProvisioningConfig**](ProvisioningConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.submit_provisioning_config_request import SubmitProvisioningConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitProvisioningConfigRequest from a JSON string
submit_provisioning_config_request_instance = SubmitProvisioningConfigRequest.from_json(json)
# print the JSON string representation of the object
print(SubmitProvisioningConfigRequest.to_json())

# convert the object into a dict
submit_provisioning_config_request_dict = submit_provisioning_config_request_instance.to_dict()
# create an instance of SubmitProvisioningConfigRequest from a dict
submit_provisioning_config_request_from_dict = SubmitProvisioningConfigRequest.from_dict(submit_provisioning_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


