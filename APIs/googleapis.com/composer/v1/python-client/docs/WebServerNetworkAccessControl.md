# WebServerNetworkAccessControl

Network-level access control policy for the Airflow web server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ip_ranges** | [**List[AllowedIpRange]**](AllowedIpRange.md) | A collection of allowed IP ranges with descriptions. | [optional] 

## Example

```python
from openapi_client.models.web_server_network_access_control import WebServerNetworkAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of WebServerNetworkAccessControl from a JSON string
web_server_network_access_control_instance = WebServerNetworkAccessControl.from_json(json)
# print the JSON string representation of the object
print(WebServerNetworkAccessControl.to_json())

# convert the object into a dict
web_server_network_access_control_dict = web_server_network_access_control_instance.to_dict()
# create an instance of WebServerNetworkAccessControl from a dict
web_server_network_access_control_from_dict = WebServerNetworkAccessControl.from_dict(web_server_network_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


