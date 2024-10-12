# AlertProperties

Alert property bag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | Information specific to the monitor service that gives more contextual details about the alert. | [optional] 
**egress_config** | **object** | Config which would be used for displaying the data in portal. | [optional] 
**essentials** | [**Essentials**](Essentials.md) |  | [optional] 

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


