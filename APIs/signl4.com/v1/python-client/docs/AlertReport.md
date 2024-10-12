# AlertReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last24_hours** | [**AlertCounts**](AlertCounts.md) |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**team_current_duty** | [**AlertCounts**](AlertCounts.md) |  | [optional] 
**team_id** | **str** |  | [optional] 
**team_last_duty** | [**AlertCounts**](AlertCounts.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**user_last_duty_change** | [**AlertCounts**](AlertCounts.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_report import AlertReport

# TODO update the JSON string below
json = "{}"
# create an instance of AlertReport from a JSON string
alert_report_instance = AlertReport.from_json(json)
# print the JSON string representation of the object
print(AlertReport.to_json())

# convert the object into a dict
alert_report_dict = alert_report_instance.to_dict()
# create an instance of AlertReport from a dict
alert_report_from_dict = AlertReport.from_dict(alert_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


