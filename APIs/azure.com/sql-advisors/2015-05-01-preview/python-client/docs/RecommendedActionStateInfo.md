# RecommendedActionStateInfo

Contains information of current state for an Azure SQL Database, Server or Elastic Pool Recommended Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_initiated_by** | **str** | Gets who initiated the execution of this recommended action. Possible Value are: User    -&gt; When user explicitly notified system to apply the recommended action. System  -&gt; When auto-execute status of this advisor was set to &#39;Enabled&#39;, in which case the system applied it. | [optional] [readonly] 
**current_value** | **str** | Current state the recommended action is in. Some commonly used states are: Active      -&gt; recommended action is active and no action has been taken yet. Pending     -&gt; recommended action is approved for and is awaiting execution. Executing   -&gt; recommended action is being applied on the user database. Verifying   -&gt; recommended action was applied and is being verified of its usefulness by the system. Success     -&gt; recommended action was applied and improvement found during verification. Pending Revert  -&gt; verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -&gt; changes made while applying recommended action are being reverted on the user database. Reverted    -&gt; successfully reverted the changes made by recommended action on user database. Ignored     -&gt; user explicitly ignored/discarded the recommended action.  | 
**last_modified** | **datetime** | Gets the time when the state was last modified | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_action_state_info import RecommendedActionStateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionStateInfo from a JSON string
recommended_action_state_info_instance = RecommendedActionStateInfo.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionStateInfo.to_json())

# convert the object into a dict
recommended_action_state_info_dict = recommended_action_state_info_instance.to_dict()
# create an instance of RecommendedActionStateInfo from a dict
recommended_action_state_info_from_dict = RecommendedActionStateInfo.from_dict(recommended_action_state_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


