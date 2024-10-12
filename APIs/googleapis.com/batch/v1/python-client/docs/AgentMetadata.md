# AgentMetadata

VM Agent Metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | When the VM agent started. Use agent_startup_time instead. | [optional] 
**creator** | **str** | Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of \&quot;created-by\&quot;. | [optional] 
**image_version** | **str** | image version for the VM that this agent is installed on. | [optional] 
**instance** | **str** | GCP instance name (go/instance-name). | [optional] 
**instance_id** | **str** | GCP instance ID (go/instance-id). | [optional] 
**instance_preemption_notice_received** | **bool** | If the GCP instance has received preemption notice. | [optional] 
**os_release** | **Dict[str, str]** | parsed contents of /etc/os-release | [optional] 
**version** | **str** | agent binary version running on VM | [optional] 
**zone** | **str** | Agent zone. | [optional] 

## Example

```python
from openapi_client.models.agent_metadata import AgentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AgentMetadata from a JSON string
agent_metadata_instance = AgentMetadata.from_json(json)
# print the JSON string representation of the object
print(AgentMetadata.to_json())

# convert the object into a dict
agent_metadata_dict = agent_metadata_instance.to_dict()
# create an instance of AgentMetadata from a dict
agent_metadata_from_dict = AgentMetadata.from_dict(agent_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


