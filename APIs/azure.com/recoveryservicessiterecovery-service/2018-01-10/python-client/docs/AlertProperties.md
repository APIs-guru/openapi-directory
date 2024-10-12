# AlertProperties

The properties of an alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_email_addresses** | **List[str]** | The custom email address for sending emails. | [optional] 
**locale** | **str** | The locale for the email notification. | [optional] 
**send_to_owners** | **str** | A value indicating whether to send email to subscription administrator. | [optional] 

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


