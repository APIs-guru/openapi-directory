# DatabaseSecurityAlertListResult

A list of the database's security alert policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[DatabaseSecurityAlertPolicy]**](DatabaseSecurityAlertPolicy.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_security_alert_list_result import DatabaseSecurityAlertListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseSecurityAlertListResult from a JSON string
database_security_alert_list_result_instance = DatabaseSecurityAlertListResult.from_json(json)
# print the JSON string representation of the object
print(DatabaseSecurityAlertListResult.to_json())

# convert the object into a dict
database_security_alert_list_result_dict = database_security_alert_list_result_instance.to_dict()
# create an instance of DatabaseSecurityAlertListResult from a dict
database_security_alert_list_result_from_dict = DatabaseSecurityAlertListResult.from_dict(database_security_alert_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


