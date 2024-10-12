# AutomationActionWorkspace

The Log Analytics Workspace to which event data will be exported. Security alerts data will reside in the 'SecurityAlert' table and the assessments data will reside in the 'SecurityRecommendation' table (under the 'Security'/'SecurityCenterFree' solutions). Note that in order to view the data in the workspace, the Security Center Log Analytics free/standard solution needs to be enabled on that workspace. To learn more about Security Center continuous export capabilities, visit https://aka.ms/ASCExportLearnMore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace_resource_id** | **str** | The fully qualified Log Analytics Workspace Azure Resource ID. | [optional] 

## Example

```python
from openapi_client.models.automation_action_workspace import AutomationActionWorkspace

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationActionWorkspace from a JSON string
automation_action_workspace_instance = AutomationActionWorkspace.from_json(json)
# print the JSON string representation of the object
print(AutomationActionWorkspace.to_json())

# convert the object into a dict
automation_action_workspace_dict = automation_action_workspace_instance.to_dict()
# create an instance of AutomationActionWorkspace from a dict
automation_action_workspace_from_dict = AutomationActionWorkspace.from_dict(automation_action_workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


