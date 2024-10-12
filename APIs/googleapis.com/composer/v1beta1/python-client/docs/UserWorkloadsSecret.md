# UserWorkloadsSecret

User workloads Secret used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, str]** | Optional. The \&quot;data\&quot; field of Kubernetes Secret, organized in key-value pairs, which can contain sensitive values such as a password, a token, or a key. The values for all keys have to be base64-encoded strings. For details see: https://kubernetes.io/docs/concepts/configuration/secret/ | [optional] 
**name** | **str** | Identifier. The resource name of the Secret, in the form: \&quot;projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsSecrets/{userWorkloadsSecretId}\&quot; | [optional] 

## Example

```python
from openapi_client.models.user_workloads_secret import UserWorkloadsSecret

# TODO update the JSON string below
json = "{}"
# create an instance of UserWorkloadsSecret from a JSON string
user_workloads_secret_instance = UserWorkloadsSecret.from_json(json)
# print the JSON string representation of the object
print(UserWorkloadsSecret.to_json())

# convert the object into a dict
user_workloads_secret_dict = user_workloads_secret_instance.to_dict()
# create an instance of UserWorkloadsSecret from a dict
user_workloads_secret_from_dict = UserWorkloadsSecret.from_dict(user_workloads_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


