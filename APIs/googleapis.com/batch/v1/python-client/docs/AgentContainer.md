# AgentContainer

Container runnable representation on the agent side.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commands** | **List[str]** | Overrides the &#x60;CMD&#x60; specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then commands are appended as arguments to the ENTRYPOINT. | [optional] 
**entrypoint** | **str** | Overrides the &#x60;ENTRYPOINT&#x60; specified in the container. | [optional] 
**image_uri** | **str** | The URI to pull the container image from. | [optional] 
**options** | **str** | Arbitrary additional options to include in the \&quot;docker run\&quot; command when running this container, e.g. \&quot;--network host\&quot;. | [optional] 
**volumes** | **List[str]** | Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match docker run&#39;s --volume option, e.g. /foo:/bar, or /foo:/bar:ro | [optional] 

## Example

```python
from openapi_client.models.agent_container import AgentContainer

# TODO update the JSON string below
json = "{}"
# create an instance of AgentContainer from a JSON string
agent_container_instance = AgentContainer.from_json(json)
# print the JSON string representation of the object
print(AgentContainer.to_json())

# convert the object into a dict
agent_container_dict = agent_container_instance.to_dict()
# create an instance of AgentContainer from a dict
agent_container_from_dict = AgentContainer.from_dict(agent_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


