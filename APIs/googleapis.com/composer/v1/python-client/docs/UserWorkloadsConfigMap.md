# UserWorkloadsConfigMap

User workloads ConfigMap used by Airflow tasks that run with Kubernetes executor or KubernetesPodOperator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, str]** | Optional. The \&quot;data\&quot; field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/ | [optional] 
**name** | **str** | Identifier. The resource name of the ConfigMap, in the form: \&quot;projects/{projectId}/locations/{locationId}/environments/{environmentId}/userWorkloadsConfigMaps/{userWorkloadsConfigMapId}\&quot; | [optional] 

## Example

```python
from openapi_client.models.user_workloads_config_map import UserWorkloadsConfigMap

# TODO update the JSON string below
json = "{}"
# create an instance of UserWorkloadsConfigMap from a JSON string
user_workloads_config_map_instance = UserWorkloadsConfigMap.from_json(json)
# print the JSON string representation of the object
print(UserWorkloadsConfigMap.to_json())

# convert the object into a dict
user_workloads_config_map_dict = user_workloads_config_map_instance.to_dict()
# create an instance of UserWorkloadsConfigMap from a dict
user_workloads_config_map_from_dict = UserWorkloadsConfigMap.from_dict(user_workloads_config_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


