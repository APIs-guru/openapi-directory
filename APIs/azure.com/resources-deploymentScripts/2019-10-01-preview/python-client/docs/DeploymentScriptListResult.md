# DeploymentScriptListResult

List of deployment scripts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] [readonly] 
**value** | [**List[DeploymentScript]**](DeploymentScript.md) | An array of deployment scripts. | [optional] 

## Example

```python
from openapi_client.models.deployment_script_list_result import DeploymentScriptListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentScriptListResult from a JSON string
deployment_script_list_result_instance = DeploymentScriptListResult.from_json(json)
# print the JSON string representation of the object
print(DeploymentScriptListResult.to_json())

# convert the object into a dict
deployment_script_list_result_dict = deployment_script_list_result_instance.to_dict()
# create an instance of DeploymentScriptListResult from a dict
deployment_script_list_result_from_dict = DeploymentScriptListResult.from_dict(deployment_script_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


