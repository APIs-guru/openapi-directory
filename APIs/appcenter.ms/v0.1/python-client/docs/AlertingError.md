# AlertingError

Alerting service error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 
**code** | **int** | The status code return by the API. It can be 400 or 404 or 409 or 500. | 
**message** | **str** | The reason for the request failed | [optional] 

## Example

```python
from openapi_client.models.alerting_error import AlertingError

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingError from a JSON string
alerting_error_instance = AlertingError.from_json(json)
# print the JSON string representation of the object
print(AlertingError.to_json())

# convert the object into a dict
alerting_error_dict = alerting_error_instance.to_dict()
# create an instance of AlertingError from a dict
alerting_error_from_dict = AlertingError.from_dict(alerting_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


