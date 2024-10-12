# ConnectionMonitorsListDefaultResponseError

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.connection_monitors_list_default_response_error import ConnectionMonitorsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorsListDefaultResponseError from a JSON string
connection_monitors_list_default_response_error_instance = ConnectionMonitorsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorsListDefaultResponseError.to_json())

# convert the object into a dict
connection_monitors_list_default_response_error_dict = connection_monitors_list_default_response_error_instance.to_dict()
# create an instance of ConnectionMonitorsListDefaultResponseError from a dict
connection_monitors_list_default_response_error_from_dict = ConnectionMonitorsListDefaultResponseError.from_dict(connection_monitors_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


