# SubmitProvisioningConfigResponse

Response for SubmitProvisioningConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_config** | [**ProvisioningConfig**](ProvisioningConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.submit_provisioning_config_response import SubmitProvisioningConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitProvisioningConfigResponse from a JSON string
submit_provisioning_config_response_instance = SubmitProvisioningConfigResponse.from_json(json)
# print the JSON string representation of the object
print(SubmitProvisioningConfigResponse.to_json())

# convert the object into a dict
submit_provisioning_config_response_dict = submit_provisioning_config_response_instance.to_dict()
# create an instance of SubmitProvisioningConfigResponse from a dict
submit_provisioning_config_response_from_dict = SubmitProvisioningConfigResponse.from_dict(submit_provisioning_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


