# Alert

Representation of an alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Output only. The localized alert message. This may contain HTML markup, such as phrase elements or links. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the alert. Format: accounts/{account}/alerts/{alert} | [optional] [readonly] 
**severity** | **str** | Output only. Severity of this alert. | [optional] [readonly] 
**type** | **str** | Output only. Type of alert. This identifies the broad type of this alert, and provides a stable machine-readable identifier that will not be translated. For example, \&quot;payment-hold\&quot;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert import Alert

# TODO update the JSON string below
json = "{}"
# create an instance of Alert from a JSON string
alert_instance = Alert.from_json(json)
# print the JSON string representation of the object
print(Alert.to_json())

# convert the object into a dict
alert_dict = alert_instance.to_dict()
# create an instance of Alert from a dict
alert_from_dict = Alert.from_dict(alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


