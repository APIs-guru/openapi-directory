# SqlIntegration

Represents the SQL instance integrated with Managed AD.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the SQL integration was created. | [optional] [readonly] 
**name** | **str** | The unique name of the SQL integration in the form of &#x60;projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}&#x60; | [optional] 
**sql_instance** | **str** | The full resource name of an integrated SQL instance | [optional] 
**state** | **str** | Output only. The current state of the SQL integration. | [optional] [readonly] 
**update_time** | **str** | Output only. The time the SQL integration was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_integration import SqlIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of SqlIntegration from a JSON string
sql_integration_instance = SqlIntegration.from_json(json)
# print the JSON string representation of the object
print(SqlIntegration.to_json())

# convert the object into a dict
sql_integration_dict = sql_integration_instance.to_dict()
# create an instance of SqlIntegration from a dict
sql_integration_from_dict = SqlIntegration.from_dict(sql_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


