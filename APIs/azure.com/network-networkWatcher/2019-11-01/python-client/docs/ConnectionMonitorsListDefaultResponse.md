# ConnectionMonitorsListDefaultResponse

The error object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ConnectionMonitorsListDefaultResponseError**](ConnectionMonitorsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.connection_monitors_list_default_response import ConnectionMonitorsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorsListDefaultResponse from a JSON string
connection_monitors_list_default_response_instance = ConnectionMonitorsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorsListDefaultResponse.to_json())

# convert the object into a dict
connection_monitors_list_default_response_dict = connection_monitors_list_default_response_instance.to_dict()
# create an instance of ConnectionMonitorsListDefaultResponse from a dict
connection_monitors_list_default_response_from_dict = ConnectionMonitorsListDefaultResponse.from_dict(connection_monitors_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


