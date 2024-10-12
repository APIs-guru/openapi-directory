# AlertProperties

Properties of alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** | Type of the alert | 
**appeared_at_source_time** | **datetime** | UTC time at which the alert appeared on the source | 
**appeared_at_time** | **datetime** | UTC time at which the alert appeared | 
**cleared_at_source_time** | **datetime** | UTC time at which the alert was cleared on the source | [optional] 
**cleared_at_time** | **datetime** | UTC time at which the alert got cleared | [optional] 
**detailed_information** | **Dict[str, str]** | Other information about the alert | [optional] 
**error_details** | [**AlertErrorDetails**](AlertErrorDetails.md) |  | [optional] 
**recommendation** | **str** | Recommendation for acting on the alert | [optional] 
**resolution_reason** | **str** | Reason for resolving the alert | [optional] 
**scope** | **str** | Device or Resource alert | 
**severity** | **str** | Severity of the alert | 
**source** | [**AlertSource**](AlertSource.md) |  | 
**status** | **str** | Current status of the alert | 
**title** | **str** | Title of the alert | 

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


