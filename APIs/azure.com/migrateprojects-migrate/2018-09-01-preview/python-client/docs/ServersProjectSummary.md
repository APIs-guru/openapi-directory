# ServersProjectSummary

Class representing the servers project summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessed_count** | **int** | Gets or sets the count of entities assessed. | [optional] 
**discovered_count** | **int** | Gets or sets the count of entities discovered. | [optional] 
**migrated_count** | **int** | Gets or sets the count of entities migrated. | [optional] 
**replicating_count** | **int** | Gets or sets the count of entities being replicated. | [optional] 
**test_migrated_count** | **int** | Gets or sets the count of entities test migrated. | [optional] 

## Example

```python
from openapi_client.models.servers_project_summary import ServersProjectSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ServersProjectSummary from a JSON string
servers_project_summary_instance = ServersProjectSummary.from_json(json)
# print the JSON string representation of the object
print(ServersProjectSummary.to_json())

# convert the object into a dict
servers_project_summary_dict = servers_project_summary_instance.to_dict()
# create an instance of ServersProjectSummary from a dict
servers_project_summary_from_dict = ServersProjectSummary.from_dict(servers_project_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


