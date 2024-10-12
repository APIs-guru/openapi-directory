# Instance

The definition of a notebook instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Instance creation time. | [optional] [readonly] 
**creator** | **str** | Output only. Email address of entity that sent original CreateInstance request. | [optional] [readonly] 
**disable_proxy_access** | **bool** | Optional. If true, the notebook instance will not register with the proxy. | [optional] 
**gce_setup** | [**GceSetup**](GceSetup.md) |  | [optional] 
**health_info** | **Dict[str, str]** | Output only. Additional information about instance health. Example: healthInfo\&quot;: { \&quot;docker_proxy_agent_status\&quot;: \&quot;1\&quot;, \&quot;docker_status\&quot;: \&quot;1\&quot;, \&quot;jupyterlab_api_status\&quot;: \&quot;-1\&quot;, \&quot;jupyterlab_status\&quot;: \&quot;-1\&quot;, \&quot;updated\&quot;: \&quot;2020-10-18 09:40:03.573409\&quot; } | [optional] [readonly] 
**health_state** | **str** | Output only. Instance health_state. | [optional] [readonly] 
**id** | **str** | Output only. Unique ID of the resource. | [optional] [readonly] 
**instance_owners** | **List[str]** | Optional. Input only. The owner of this instance after creation. Format: &#x60;alias@example.com&#x60; Currently supports one owner only. If not specified, all of the service account users of your VM instance&#39;s service account can use the instance. | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. | [optional] 
**name** | **str** | Output only. The name of this notebook instance. Format: &#x60;projects/{project_id}/locations/{location}/instances/{instance_id}&#x60; | [optional] [readonly] 
**proxy_uri** | **str** | Output only. The proxy endpoint that is used to access the Jupyter notebook. | [optional] [readonly] 
**state** | **str** | Output only. The state of this instance. | [optional] [readonly] 
**third_party_proxy_url** | **str** | Output only. The workforce pools proxy endpoint that is used to access the Jupyter notebook. | [optional] [readonly] 
**update_time** | **str** | Output only. Instance update time. | [optional] [readonly] 
**upgrade_history** | [**List[UpgradeHistoryEntry]**](UpgradeHistoryEntry.md) | Output only. The upgrade history of this instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


