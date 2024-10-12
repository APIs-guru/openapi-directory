# SqlTriggerListResult

The List operation response, that contains the triggers and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SqlTriggerGetResults]**](SqlTriggerGetResults.md) | List of triggers and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_trigger_list_result import SqlTriggerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlTriggerListResult from a JSON string
sql_trigger_list_result_instance = SqlTriggerListResult.from_json(json)
# print the JSON string representation of the object
print(SqlTriggerListResult.to_json())

# convert the object into a dict
sql_trigger_list_result_dict = sql_trigger_list_result_instance.to_dict()
# create an instance of SqlTriggerListResult from a dict
sql_trigger_list_result_from_dict = SqlTriggerListResult.from_dict(sql_trigger_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


