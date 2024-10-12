# AlertProperties

The properties of alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_type** | **str** | The type of the alert | 
**appeared_at_source_time** | **datetime** | The source time at which the alert was raised | 
**appeared_at_time** | **datetime** | The UTC time at which the alert was raised | 
**cleared_at_source_time** | **datetime** | The source time at which the alert was cleared | [optional] 
**cleared_at_time** | **datetime** | The UTC time at which the alert was cleared | [optional] 
**detailed_information** | **Dict[str, str]** | More details about the alert | [optional] 
**error_details** | [**AlertErrorDetails**](AlertErrorDetails.md) |  | [optional] 
**recommendation** | **str** | The recommended action for the issue raised in the alert | [optional] 
**resolution_reason** | **str** | The reason for resolving the alert | [optional] 
**scope** | **str** | The scope of the alert | 
**severity** | **str** | The severity of the alert | 
**source** | [**AlertSource**](AlertSource.md) |  | 
**status** | **str** | The current status of the alert | 
**title** | **str** | The title of the alert | 

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


