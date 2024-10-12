# AlertSource

source at which the alert can be raised

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_source_type** | **str** | Source type of the alert. | [optional] 
**name** | **str** | Name of the source. | [optional] 
**time_zone** | **str** | The time zone. | [optional] 

## Example

```python
from openapi_client.models.alert_source import AlertSource

# TODO update the JSON string below
json = "{}"
# create an instance of AlertSource from a JSON string
alert_source_instance = AlertSource.from_json(json)
# print the JSON string representation of the object
print(AlertSource.to_json())

# convert the object into a dict
alert_source_dict = alert_source_instance.to_dict()
# create an instance of AlertSource from a dict
alert_source_from_dict = AlertSource.from_dict(alert_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


