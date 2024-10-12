# AlertCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acked** | **int** |  | [optional] 
**closed** | **int** |  | [optional] 
**end** | **datetime** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**start** | **datetime** |  | [optional] 
**unhandled** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.alert_counts import AlertCounts

# TODO update the JSON string below
json = "{}"
# create an instance of AlertCounts from a JSON string
alert_counts_instance = AlertCounts.from_json(json)
# print the JSON string representation of the object
print(AlertCounts.to_json())

# convert the object into a dict
alert_counts_dict = alert_counts_instance.to_dict()
# create an instance of AlertCounts from a dict
alert_counts_from_dict = AlertCounts.from_dict(alert_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


