# AlertProperties

The properties of an Alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close_time** | **datetime** | The time when the alert was closed (resolved / overridden). | [optional] [readonly] 
**cost_entity_id** | **str** | The id of the creating cost-entity (budget, invoice, credit). | [optional] [readonly] 
**creation_time** | **datetime** | The time when the alert was created. | [optional] [readonly] 
**definition** | [**AlertDefinition**](AlertDefinition.md) |  | [optional] 
**description** | **str** | Description of an alert. | [optional] [readonly] 
**details** | **Dict[str, str]** | Specific details of an alert - key-value dictionary. | [optional] [readonly] 
**modification_time** | **datetime** | The current status when alert was modified. | [optional] [readonly] 
**modification_username** | **str** | The username who modified the alert. | [optional] [readonly] 
**scope** | **str** | The scope of an alert. | [optional] [readonly] 
**source** | **str** | The source of an Alert | [optional] [readonly] 
**status** | **str** | The current status of the alert. | [optional] 
**status_modification_time** | **datetime** | The current status when alert status was modified. | [optional] [readonly] 

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


