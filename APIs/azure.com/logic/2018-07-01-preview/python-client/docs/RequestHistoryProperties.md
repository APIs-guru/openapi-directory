# RequestHistoryProperties

The request history.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The time the request ended. | [optional] 
**request** | [**Request**](Request.md) |  | [optional] 
**response** | [**Response**](Response.md) |  | [optional] 
**start_time** | **datetime** | The time the request started. | [optional] 

## Example

```python
from openapi_client.models.request_history_properties import RequestHistoryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RequestHistoryProperties from a JSON string
request_history_properties_instance = RequestHistoryProperties.from_json(json)
# print the JSON string representation of the object
print(RequestHistoryProperties.to_json())

# convert the object into a dict
request_history_properties_dict = request_history_properties_instance.to_dict()
# create an instance of RequestHistoryProperties from a dict
request_history_properties_from_dict = RequestHistoryProperties.from_dict(request_history_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


