# Alerts

The list of alerts for a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of alert elements. | [optional] 
**value** | [**List[Alert]**](Alert.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.alerts import Alerts

# TODO update the JSON string below
json = "{}"
# create an instance of Alerts from a JSON string
alerts_instance = Alerts.from_json(json)
# print the JSON string representation of the object
print(Alerts.to_json())

# convert the object into a dict
alerts_dict = alerts_instance.to_dict()
# create an instance of Alerts from a dict
alerts_from_dict = Alerts.from_dict(alerts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


