# AlertsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AlertsListDefaultResponseError**](AlertsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.alerts_list_default_response import AlertsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsListDefaultResponse from a JSON string
alerts_list_default_response_instance = AlertsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AlertsListDefaultResponse.to_json())

# convert the object into a dict
alerts_list_default_response_dict = alerts_list_default_response_instance.to_dict()
# create an instance of AlertsListDefaultResponse from a dict
alerts_list_default_response_from_dict = AlertsListDefaultResponse.from_dict(alerts_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


