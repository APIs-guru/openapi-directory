# Alert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. | [optional] 
**is_dismissible** | **bool** | Whether this alert can be dismissed. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsense#alert. | [optional] [default to 'adsense#alert']
**message** | **str** | The localized alert message. | [optional] 
**severity** | **str** | Severity of this alert. Possible values: INFO, WARNING, SEVERE. | [optional] 
**type** | **str** | Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD. | [optional] 

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


