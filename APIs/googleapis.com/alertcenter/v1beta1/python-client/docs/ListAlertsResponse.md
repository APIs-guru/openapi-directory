# ListAlertsResponse

Response message for an alert listing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**List[Alert]**](Alert.md) | The list of alerts. | [optional] 
**next_page_token** | **str** | The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call. | [optional] 

## Example

```python
from openapi_client.models.list_alerts_response import ListAlertsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAlertsResponse from a JSON string
list_alerts_response_instance = ListAlertsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAlertsResponse.to_json())

# convert the object into a dict
list_alerts_response_dict = list_alerts_response_instance.to_dict()
# create an instance of ListAlertsResponse from a dict
list_alerts_response_from_dict = ListAlertsResponse.from_dict(list_alerts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


