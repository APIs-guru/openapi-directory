# Environment

A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID \"default\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**docker_image** | **str** | Required. Immutable. Full path to the Docker image used to run this environment, e.g. \&quot;gcr.io/dev-con/cloud-devshell:latest\&quot;. | [optional] 
**id** | **str** | Output only. The environment&#39;s identifier, unique among the user&#39;s environments. | [optional] [readonly] 
**name** | **str** | Immutable. Full name of this resource, in the format &#x60;users/{owner_email}/environments/{environment_id}&#x60;. &#x60;{owner_email}&#x60; is the email address of the user to whom this environment belongs, and &#x60;{environment_id}&#x60; is the identifier of this environment. For example, &#x60;users/someone@example.com/environments/default&#x60;. | [optional] 
**public_keys** | **List[str]** | Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods. | [optional] [readonly] 
**ssh_host** | **str** | Output only. Host to which clients can connect to initiate SSH sessions with the environment. | [optional] [readonly] 
**ssh_port** | **int** | Output only. Port to which clients can connect to initiate SSH sessions with the environment. | [optional] [readonly] 
**ssh_username** | **str** | Output only. Username that clients should use when initiating SSH sessions with the environment. | [optional] [readonly] 
**state** | **str** | Output only. Current execution state of this environment. | [optional] [readonly] 
**web_host** | **str** | Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.environment import Environment

# TODO update the JSON string below
json = "{}"
# create an instance of Environment from a JSON string
environment_instance = Environment.from_json(json)
# print the JSON string representation of the object
print(Environment.to_json())

# convert the object into a dict
environment_dict = environment_instance.to_dict()
# create an instance of Environment from a dict
environment_from_dict = Environment.from_dict(environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


