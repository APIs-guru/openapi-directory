# AlertFilter

Filters that can be specified on the alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appeared_on_time** | **datetime** | UTC time on which the alert appeared | [optional] 
**severity** | **str** | Severity of the alert | [optional] 
**source_name** | **str** | Source name of the alert | [optional] 
**source_type** | **str** | Source of the alert | [optional] 
**status** | **str** | Status of the alert | [optional] 

## Example

```python
from openapi_client.models.alert_filter import AlertFilter

# TODO update the JSON string below
json = "{}"
# create an instance of AlertFilter from a JSON string
alert_filter_instance = AlertFilter.from_json(json)
# print the JSON string representation of the object
print(AlertFilter.to_json())

# convert the object into a dict
alert_filter_dict = alert_filter_instance.to_dict()
# create an instance of AlertFilter from a dict
alert_filter_from_dict = AlertFilter.from_dict(alert_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


