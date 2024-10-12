# AlertLogStatusCodeGet

The AlertLogStatusCode resource is a set of codes that describes the outcomes of the dispatching of an alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_log_status_code_get import AlertLogStatusCodeGet

# TODO update the JSON string below
json = "{}"
# create an instance of AlertLogStatusCodeGet from a JSON string
alert_log_status_code_get_instance = AlertLogStatusCodeGet.from_json(json)
# print the JSON string representation of the object
print(AlertLogStatusCodeGet.to_json())

# convert the object into a dict
alert_log_status_code_get_dict = alert_log_status_code_get_instance.to_dict()
# create an instance of AlertLogStatusCodeGet from a dict
alert_log_status_code_get_from_dict = AlertLogStatusCodeGet.from_dict(alert_log_status_code_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


