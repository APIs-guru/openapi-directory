# SQLIntegration

Represents the SQL instance integrated with AD.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the instance was created. | [optional] [readonly] 
**name** | **str** | The unique name of the sql integration in the form of &#x60;projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}&#x60; | [optional] 
**sql_instance** | **str** | The full resource name of an integrated sql instance | [optional] 
**state** | **str** | Output only. The current state of the managed OU. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time for this SQL instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_integration import SQLIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of SQLIntegration from a JSON string
sql_integration_instance = SQLIntegration.from_json(json)
# print the JSON string representation of the object
print(SQLIntegration.to_json())

# convert the object into a dict
sql_integration_dict = sql_integration_instance.to_dict()
# create an instance of SQLIntegration from a dict
sql_integration_from_dict = SQLIntegration.from_dict(sql_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


