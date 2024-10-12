# BigQueryAction

Represents a workflow action that will run against BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_script** | **str** | Output only. The generated BigQuery SQL script that will be executed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.big_query_action import BigQueryAction

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryAction from a JSON string
big_query_action_instance = BigQueryAction.from_json(json)
# print the JSON string representation of the object
print(BigQueryAction.to_json())

# convert the object into a dict
big_query_action_dict = big_query_action_instance.to_dict()
# create an instance of BigQueryAction from a dict
big_query_action_from_dict = BigQueryAction.from_dict(big_query_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


