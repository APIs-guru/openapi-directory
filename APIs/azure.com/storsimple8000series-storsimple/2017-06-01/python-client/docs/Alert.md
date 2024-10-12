# Alert

The alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AlertProperties**](AlertProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.alert import Alert

# TODO update the JSON string below
json = "{}"
# create an instance of Alert from a JSON string
alert_instance = Alert.from_json(json)
# print the JSON string representation of the object
print(Alert.to_json())

# convert the object into a dict
alert_dict = alert_instance.to_dict()
# create an instance of Alert from a dict
alert_from_dict = Alert.from_dict(alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


