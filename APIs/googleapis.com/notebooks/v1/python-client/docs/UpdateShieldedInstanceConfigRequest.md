# UpdateShieldedInstanceConfigRequest

Request for updating the Shielded Instance config for a notebook instance. You can only use this method on a stopped instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shielded_instance_config** | [**ShieldedInstanceConfig**](ShieldedInstanceConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_shielded_instance_config_request import UpdateShieldedInstanceConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateShieldedInstanceConfigRequest from a JSON string
update_shielded_instance_config_request_instance = UpdateShieldedInstanceConfigRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateShieldedInstanceConfigRequest.to_json())

# convert the object into a dict
update_shielded_instance_config_request_dict = update_shielded_instance_config_request_instance.to_dict()
# create an instance of UpdateShieldedInstanceConfigRequest from a dict
update_shielded_instance_config_request_from_dict = UpdateShieldedInstanceConfigRequest.from_dict(update_shielded_instance_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


