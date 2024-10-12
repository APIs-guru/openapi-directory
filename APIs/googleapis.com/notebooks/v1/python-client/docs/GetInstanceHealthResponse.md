# GetInstanceHealthResponse

Response for checking if a notebook instance is healthy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_info** | **Dict[str, str]** | Output only. Additional information about instance health. Example: healthInfo\&quot;: { \&quot;docker_proxy_agent_status\&quot;: \&quot;1\&quot;, \&quot;docker_status\&quot;: \&quot;1\&quot;, \&quot;jupyterlab_api_status\&quot;: \&quot;-1\&quot;, \&quot;jupyterlab_status\&quot;: \&quot;-1\&quot;, \&quot;updated\&quot;: \&quot;2020-10-18 09:40:03.573409\&quot; } | [optional] [readonly] 
**health_state** | **str** | Output only. Runtime health_state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_instance_health_response import GetInstanceHealthResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetInstanceHealthResponse from a JSON string
get_instance_health_response_instance = GetInstanceHealthResponse.from_json(json)
# print the JSON string representation of the object
print(GetInstanceHealthResponse.to_json())

# convert the object into a dict
get_instance_health_response_dict = get_instance_health_response_instance.to_dict()
# create an instance of GetInstanceHealthResponse from a dict
get_instance_health_response_from_dict = GetInstanceHealthResponse.from_dict(get_instance_health_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


