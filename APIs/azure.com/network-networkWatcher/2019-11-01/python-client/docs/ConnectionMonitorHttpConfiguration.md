# ConnectionMonitorHttpConfiguration

Describes the HTTP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The HTTP method to use. | [optional] 
**path** | **str** | The path component of the URI. For instance, \&quot;/dir1/dir2\&quot;. | [optional] 
**port** | **int** | The port to connect to. | [optional] 
**prefer_https** | **bool** | Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit. | [optional] 
**request_headers** | [**List[HTTPHeader]**](HTTPHeader.md) | The HTTP headers to transmit with the request. | [optional] 
**valid_status_code_ranges** | **List[str]** | HTTP status codes to consider successful. For instance, \&quot;2xx,301-304,418\&quot;. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_http_configuration import ConnectionMonitorHttpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorHttpConfiguration from a JSON string
connection_monitor_http_configuration_instance = ConnectionMonitorHttpConfiguration.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorHttpConfiguration.to_json())

# convert the object into a dict
connection_monitor_http_configuration_dict = connection_monitor_http_configuration_instance.to_dict()
# create an instance of ConnectionMonitorHttpConfiguration from a dict
connection_monitor_http_configuration_from_dict = ConnectionMonitorHttpConfiguration.from_dict(connection_monitor_http_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


