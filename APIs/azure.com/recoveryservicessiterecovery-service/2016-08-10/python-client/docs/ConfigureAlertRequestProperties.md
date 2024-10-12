# ConfigureAlertRequestProperties

Properties of a configure alert request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_email_addresses** | **List[str]** | The custom email address for sending emails. | [optional] 
**locale** | **str** | The locale for the email notification. | [optional] 
**send_to_owners** | **str** | A value indicating whether to send email to subscription administrator. | [optional] 

## Example

```python
from openapi_client.models.configure_alert_request_properties import ConfigureAlertRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureAlertRequestProperties from a JSON string
configure_alert_request_properties_instance = ConfigureAlertRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ConfigureAlertRequestProperties.to_json())

# convert the object into a dict
configure_alert_request_properties_dict = configure_alert_request_properties_instance.to_dict()
# create an instance of ConfigureAlertRequestProperties from a dict
configure_alert_request_properties_from_dict = ConfigureAlertRequestProperties.from_dict(configure_alert_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


