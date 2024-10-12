# Environment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | **str** |  | [optional] 
**client_certificate** | **str** |  | [optional] 
**emails** | **object** |  | [optional] 
**exported_at** | **int** |  | [optional] 
**headers** | **object** |  | [optional] 
**id** | **str** | The unique identifier for this environment. | [optional] 
**initial_script_hash** | **str** |  | [optional] 
**initial_variables** | **object** |  | [optional] 
**integrations** | [**List[Integration]**](Integration.md) | The list of integrations for this environment. | [optional] 
**name** | **str** | Name of this environment. | 
**parent_environment_id** | **str** |  | [optional] 
**preserve_cookies** | **bool** |  | [optional] 
**regions** | **List[str]** | An array of the region codes that this environment is using. | [optional] 
**remote_agents** | [**List[Agent]**](Agent.md) |  | [optional] 
**retry_on_failure** | **bool** |  | [optional] 
**script** | **str** |  | [optional] 
**script_library** | **List[str]** | The list of ids for scripts, part of the script libraries, being used for this environment. | [optional] 
**stop_on_failure** | **bool** | Stop executing the test after the first failed step. | [optional] 
**test_id** | **str** | The unique identifier for this test. | [optional] 
**verify_ssl** | **bool** | Validate all SSL certificates on any HTTPS connections. | [optional] 
**version** | **str** |  | [optional] 
**webhooks** | **str** |  | [optional] 

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


