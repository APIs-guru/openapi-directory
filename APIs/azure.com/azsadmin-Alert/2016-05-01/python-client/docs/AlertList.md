# AlertList

A pageable list of alerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[Alert]**](Alert.md) | List of alerts. | [optional] 

## Example

```python
from openapi_client.models.alert_list import AlertList

# TODO update the JSON string below
json = "{}"
# create an instance of AlertList from a JSON string
alert_list_instance = AlertList.from_json(json)
# print the JSON string representation of the object
print(AlertList.to_json())

# convert the object into a dict
alert_list_dict = alert_list_instance.to_dict()
# create an instance of AlertList from a dict
alert_list_from_dict = AlertList.from_dict(alert_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


