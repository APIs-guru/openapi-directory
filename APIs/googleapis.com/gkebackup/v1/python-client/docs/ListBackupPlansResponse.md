# ListBackupPlansResponse

Response message for ListBackupPlans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_plans** | [**List[BackupPlan]**](BackupPlan.md) | The list of BackupPlans matching the given criteria. | [optional] 
**next_page_token** | **str** | A token which may be sent as page_token in a subsequent &#x60;ListBackupPlans&#x60; call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_backup_plans_response import ListBackupPlansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBackupPlansResponse from a JSON string
list_backup_plans_response_instance = ListBackupPlansResponse.from_json(json)
# print the JSON string representation of the object
print(ListBackupPlansResponse.to_json())

# convert the object into a dict
list_backup_plans_response_dict = list_backup_plans_response_instance.to_dict()
# create an instance of ListBackupPlansResponse from a dict
list_backup_plans_response_from_dict = ListBackupPlansResponse.from_dict(list_backup_plans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


