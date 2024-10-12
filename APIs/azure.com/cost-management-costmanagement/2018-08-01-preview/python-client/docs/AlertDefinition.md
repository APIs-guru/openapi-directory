# AlertDefinition

The definition (rule) of an Alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Category of the alert. | [optional] [readonly] 
**criteria** | **str** | Criteria (condition) of the alert. | [optional] [readonly] 
**type** | **str** | The type of cost-entity the alert is defined on. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_definition import AlertDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AlertDefinition from a JSON string
alert_definition_instance = AlertDefinition.from_json(json)
# print the JSON string representation of the object
print(AlertDefinition.to_json())

# convert the object into a dict
alert_definition_dict = alert_definition_instance.to_dict()
# create an instance of AlertDefinition from a dict
alert_definition_from_dict = AlertDefinition.from_dict(alert_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


