# AlertConfidenceReason

Factors that increase our confidence that the alert is a true positive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | description of the confidence reason | [optional] [readonly] 
**type** | **str** | Type of confidence factor | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_confidence_reason import AlertConfidenceReason

# TODO update the JSON string below
json = "{}"
# create an instance of AlertConfidenceReason from a JSON string
alert_confidence_reason_instance = AlertConfidenceReason.from_json(json)
# print the JSON string representation of the object
print(AlertConfidenceReason.to_json())

# convert the object into a dict
alert_confidence_reason_dict = alert_confidence_reason_instance.to_dict()
# create an instance of AlertConfidenceReason from a dict
alert_confidence_reason_from_dict = AlertConfidenceReason.from_dict(alert_confidence_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


