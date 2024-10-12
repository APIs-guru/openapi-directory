# PromoteReleaseRule

`PromoteRelease` rule will automatically promote a release from the current target to a specified target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**AutomationRuleCondition**](AutomationRuleCondition.md) |  | [optional] 
**destination_phase** | **str** | Optional. The starting phase of the rollout created by this operation. Default to the first phase. | [optional] 
**destination_target_id** | **str** | Optional. The ID of the stage in the pipeline to which this &#x60;Release&#x60; is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * \&quot;@next\&quot;, the next target in the promotion sequence. | [optional] 
**id** | **str** | Required. ID of the rule. This id must be unique in the &#x60;Automation&#x60; resource to which this rule belongs. The format is &#x60;a-z{0,62}&#x60;. | [optional] 
**wait** | **str** | Optional. How long the release need to be paused until being promoted to the next target. | [optional] 

## Example

```python
from openapi_client.models.promote_release_rule import PromoteReleaseRule

# TODO update the JSON string below
json = "{}"
# create an instance of PromoteReleaseRule from a JSON string
promote_release_rule_instance = PromoteReleaseRule.from_json(json)
# print the JSON string representation of the object
print(PromoteReleaseRule.to_json())

# convert the object into a dict
promote_release_rule_dict = promote_release_rule_instance.to_dict()
# create an instance of PromoteReleaseRule from a dict
promote_release_rule_from_dict = PromoteReleaseRule.from_dict(promote_release_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


