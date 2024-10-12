# Alerts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Alert]**](Alert.md) | The alerts returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#alerts. | [optional] [default to 'adsense#alerts']

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


