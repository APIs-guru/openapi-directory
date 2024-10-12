# AgentKMSEnvMap

AgentKMSEnvMap contains the encrypted key/value pair to be used in the environment on the Agent side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cipher_text** | **str** | The value of the cipherText response from the &#x60;encrypt&#x60; method. | [optional] 
**key_name** | **str** | The name of the KMS key that will be used to decrypt the cipher text. | [optional] 

## Example

```python
from openapi_client.models.agent_kms_env_map import AgentKMSEnvMap

# TODO update the JSON string below
json = "{}"
# create an instance of AgentKMSEnvMap from a JSON string
agent_kms_env_map_instance = AgentKMSEnvMap.from_json(json)
# print the JSON string representation of the object
print(AgentKMSEnvMap.to_json())

# convert the object into a dict
agent_kms_env_map_dict = agent_kms_env_map_instance.to_dict()
# create an instance of AgentKMSEnvMap from a dict
agent_kms_env_map_from_dict = AgentKMSEnvMap.from_dict(agent_kms_env_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


