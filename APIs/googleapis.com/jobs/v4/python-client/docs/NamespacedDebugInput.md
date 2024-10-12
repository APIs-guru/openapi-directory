# NamespacedDebugInput

Next ID: 16

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolutely_forced_exp_names** | **List[str]** | Set of experiment names to be absolutely forced. These experiments will be forced without evaluating the conditions. | [optional] 
**absolutely_forced_exp_tags** | **List[str]** | Set of experiment tags to be absolutely forced. The experiments with these tags will be forced without evaluating the conditions. | [optional] 
**absolutely_forced_exps** | **List[int]** | Set of experiment ids to be absolutely forced. These ids will be forced without evaluating the conditions. | [optional] 
**conditionally_forced_exp_names** | **List[str]** | Set of experiment names to be conditionally forced. These experiments will be forced only if their conditions and their parent domain&#39;s conditions are true. | [optional] 
**conditionally_forced_exp_tags** | **List[str]** | Set of experiment tags to be conditionally forced. The experiments with these tags will be forced only if their conditions and their parent domain&#39;s conditions are true. | [optional] 
**conditionally_forced_exps** | **List[int]** | Set of experiment ids to be conditionally forced. These ids will be forced only if their conditions and their parent domain&#39;s conditions are true. | [optional] 
**disable_automatic_enrollment_selection** | **bool** | If true, disable automatic enrollment selection (at all diversion points). Automatic enrollment selection means experiment selection process based on the experiment&#39;s automatic enrollment condition. This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process. | [optional] 
**disable_exp_names** | **List[str]** | Set of experiment names to be disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. If a name corresponds to a domain, the domain itself and all descendant experiments and domains are disabled together. | [optional] 
**disable_exp_tags** | **List[str]** | Set of experiment tags to be disabled. All experiments that are tagged with one or more of these tags are disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. | [optional] 
**disable_exps** | **List[int]** | Set of experiment ids to be disabled. If an experiment is disabled, it is never selected nor forced. If an aggregate experiment is disabled, its partitions are disabled together. If an experiment with an enrollment is disabled, the enrollment is disabled together. If an ID corresponds to a domain, the domain itself and all descendant experiments and domains are disabled together. | [optional] 
**disable_manual_enrollment_selection** | **bool** | If true, disable manual enrollment selection (at all diversion points). Manual enrollment selection means experiment selection process based on the request&#39;s manual enrollment states (a.k.a. opt-in experiments). This does not disable selection of forced experiments. Setting this field to false does not change anything in the experiment selection process. | [optional] 
**disable_organic_selection** | **bool** | If true, disable organic experiment selection (at all diversion points). Organic selection means experiment selection process based on traffic allocation and diversion condition evaluation. This does not disable selection of forced experiments. This is useful in cases when it is not known whether experiment selection behavior is responsible for a error or breakage. Disabling organic selection may help to isolate the cause of a given problem. Setting this field to false does not change anything in the experiment selection process. | [optional] 
**forced_flags** | **Dict[str, str]** | Flags to force in a particular experiment state. Map from flag name to flag value. | [optional] 
**forced_rollouts** | **Dict[str, bool]** | Rollouts to force in a particular experiment state. Map from rollout name to rollout value. | [optional] 
**testing_mode** | **str** | Sets different testing modes. See the documentation in the TestingMode message for more information. | [optional] 

## Example

```python
from openapi_client.models.namespaced_debug_input import NamespacedDebugInput

# TODO update the JSON string below
json = "{}"
# create an instance of NamespacedDebugInput from a JSON string
namespaced_debug_input_instance = NamespacedDebugInput.from_json(json)
# print the JSON string representation of the object
print(NamespacedDebugInput.to_json())

# convert the object into a dict
namespaced_debug_input_dict = namespaced_debug_input_instance.to_dict()
# create an instance of NamespacedDebugInput from a dict
namespaced_debug_input_from_dict = NamespacedDebugInput.from_dict(namespaced_debug_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


