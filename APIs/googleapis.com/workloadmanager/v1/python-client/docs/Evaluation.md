# Evaluation

LINT.IfChange Message describing Evaluation object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_destination** | [**BigQueryDestination**](BigQueryDestination.md) |  | [optional] 
**create_time** | **str** | Output only. [Output only] Create time stamp | [optional] [readonly] 
**custom_rules_bucket** | **str** | The Cloud Storage bucket name for custom rules. | [optional] 
**description** | **str** | Description of the Evaluation | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs | [optional] 
**name** | **str** | name of resource names have the form &#39;projects/{project_id}/locations/{location_id}/evaluations/{evaluation_id}&#39; | [optional] 
**resource_filter** | [**ResourceFilter**](ResourceFilter.md) |  | [optional] 
**resource_status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 
**rule_names** | **List[str]** | the name of the rule | [optional] 
**rule_versions** | **List[str]** | Output only. [Output only] The updated rule ids if exist. | [optional] [readonly] 
**schedule** | **str** | crontab format schedule for scheduled evaluation, currently only support the following schedule: \&quot;0 */1 * * *\&quot;, \&quot;0 */6 * * *\&quot;, \&quot;0 */12 * * *\&quot;, \&quot;0 0 */1 * *\&quot;, \&quot;0 0 */7 * *\&quot;, | [optional] 
**update_time** | **str** | Output only. [Output only] Update time stamp | [optional] [readonly] 

## Example

```python
from openapi_client.models.evaluation import Evaluation

# TODO update the JSON string below
json = "{}"
# create an instance of Evaluation from a JSON string
evaluation_instance = Evaluation.from_json(json)
# print the JSON string representation of the object
print(Evaluation.to_json())

# convert the object into a dict
evaluation_dict = evaluation_instance.to_dict()
# create an instance of Evaluation from a dict
evaluation_from_dict = Evaluation.from_dict(evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


