# AlertProperties

Properties of alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** | Alert type. | [optional] [readonly] 
**appeared_at_date_time** | **datetime** | UTC time when the alert appeared. | [optional] [readonly] 
**detailed_information** | **Dict[str, str]** | Alert details. | [optional] [readonly] 
**error_details** | [**AlertErrorDetails**](AlertErrorDetails.md) |  | [optional] 
**recommendation** | **str** | Alert recommendation. | [optional] [readonly] 
**severity** | **str** | Severity of the alert. | [optional] [readonly] 
**title** | **str** | Alert title. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_properties import AlertProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AlertProperties from a JSON string
alert_properties_instance = AlertProperties.from_json(json)
# print the JSON string representation of the object
print(AlertProperties.to_json())

# convert the object into a dict
alert_properties_dict = alert_properties_instance.to_dict()
# create an instance of AlertProperties from a dict
alert_properties_from_dict = AlertProperties.from_dict(alert_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


