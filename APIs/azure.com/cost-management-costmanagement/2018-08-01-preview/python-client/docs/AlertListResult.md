# AlertListResult

Result of listing alerts. It contains a list of available alerts in the scope provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of Alerts. | [optional] [readonly] 
**value** | [**List[Alert]**](Alert.md) | The list of alerts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert_list_result import AlertListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AlertListResult from a JSON string
alert_list_result_instance = AlertListResult.from_json(json)
# print the JSON string representation of the object
print(AlertListResult.to_json())

# convert the object into a dict
alert_list_result_dict = alert_list_result_instance.to_dict()
# create an instance of AlertListResult from a dict
alert_list_result_from_dict = AlertListResult.from_dict(alert_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


