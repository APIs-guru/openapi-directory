# AlertsList

List the alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to fetch the next set of alerts. | [optional] 
**value** | [**List[Alert]**](Alert.md) | List of alerts | [optional] 

## Example

```python
from openapi_client.models.alerts_list import AlertsList

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsList from a JSON string
alerts_list_instance = AlertsList.from_json(json)
# print the JSON string representation of the object
print(AlertsList.to_json())

# convert the object into a dict
alerts_list_dict = alerts_list_instance.to_dict()
# create an instance of AlertsList from a dict
alerts_list_from_dict = AlertsList.from_dict(alerts_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


