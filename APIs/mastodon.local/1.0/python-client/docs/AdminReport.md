# AdminReport

Admin-level information about a filed report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | [optional] 
**action_taken** | **str** | The action taken to resolve this report. Enumerable oneOf. | [optional] 
**assigned_account** | [**Account**](Account.md) |  | [optional] 
**comment** | **str** | An optional reason for reporting. | [optional] 
**created_at** | **datetime** | The time the report was filed. | [optional] 
**id** | **str** | The ID of the report in the database. Cast from an integer, but not guaranteed to be a number. | [optional] 
**statuses** | [**List[Status]**](Status.md) | Statuses attached to the report, for context. | [optional] 
**target_account** | [**Account**](Account.md) |  | [optional] 
**updated_at** | **datetime** | The time of last action on this report. | [optional] 

## Example

```python
from openapi_client.models.admin_report import AdminReport

# TODO update the JSON string below
json = "{}"
# create an instance of AdminReport from a JSON string
admin_report_instance = AdminReport.from_json(json)
# print the JSON string representation of the object
print(AdminReport.to_json())

# convert the object into a dict
admin_report_dict = admin_report_instance.to_dict()
# create an instance of AdminReport from a dict
admin_report_from_dict = AdminReport.from_dict(admin_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


