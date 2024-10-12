# ServersSolutionSummary

Class representing the servers solution summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessed_count** | **int** | Gets or sets the count of servers assessed. | [optional] 
**discovered_count** | **int** | Gets or sets the count of servers discovered. | [optional] 
**migrated_count** | **int** | Gets or sets the count of servers migrated. | [optional] 
**replicating_count** | **int** | Gets or sets the count of servers being replicated. | [optional] 
**test_migrated_count** | **int** | Gets or sets the count of servers test migrated. | [optional] 

## Example

```python
from openapi_client.models.servers_solution_summary import ServersSolutionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ServersSolutionSummary from a JSON string
servers_solution_summary_instance = ServersSolutionSummary.from_json(json)
# print the JSON string representation of the object
print(ServersSolutionSummary.to_json())

# convert the object into a dict
servers_solution_summary_dict = servers_solution_summary_instance.to_dict()
# create an instance of ServersSolutionSummary from a dict
servers_solution_summary_from_dict = ServersSolutionSummary.from_dict(servers_solution_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


