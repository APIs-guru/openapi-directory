# ConfigureAlertRequest

Request to configure alerts for the system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConfigureAlertRequestProperties**](ConfigureAlertRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.configure_alert_request import ConfigureAlertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureAlertRequest from a JSON string
configure_alert_request_instance = ConfigureAlertRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigureAlertRequest.to_json())

# convert the object into a dict
configure_alert_request_dict = configure_alert_request_instance.to_dict()
# create an instance of ConfigureAlertRequest from a dict
configure_alert_request_from_dict = ConfigureAlertRequest.from_dict(configure_alert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


