# Environment

An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_time** | [**Timestamp**](Timestamp.md) |  | [optional] 
**creation_time** | [**Timestamp**](Timestamp.md) |  | [optional] 
**dimension_value** | [**List[EnvironmentDimensionValueEntry]**](EnvironmentDimensionValueEntry.md) | Dimension values describing the environment. Dimension values always consist of \&quot;Model\&quot;, \&quot;Version\&quot;, \&quot;Locale\&quot;, and \&quot;Orientation\&quot;. - In response: always set - In create request: always set - In update request: never set | [optional] 
**display_name** | **str** | A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27. | [optional] 
**environment_id** | **str** | Output only. An Environment id. | [optional] 
**environment_result** | [**MergedResult**](MergedResult.md) |  | [optional] 
**execution_id** | **str** | Output only. An Execution id. | [optional] 
**history_id** | **str** | Output only. A History id. | [optional] 
**project_id** | **str** | Output only. A Project id. | [optional] 
**results_storage** | [**ResultsStorage**](ResultsStorage.md) |  | [optional] 
**shard_summaries** | [**List[ShardSummary]**](ShardSummary.md) | Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService. | [optional] 

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


