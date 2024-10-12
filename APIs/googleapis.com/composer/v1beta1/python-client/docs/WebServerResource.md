# WebServerResource

Configuration for resources used by Airflow web server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | Optional. CPU request and limit for Airflow web server. | [optional] 
**memory_gb** | **float** | Optional. Memory (GB) request and limit for Airflow web server. | [optional] 
**storage_gb** | **float** | Optional. Storage (GB) request and limit for Airflow web server. | [optional] 

## Example

```python
from openapi_client.models.web_server_resource import WebServerResource

# TODO update the JSON string below
json = "{}"
# create an instance of WebServerResource from a JSON string
web_server_resource_instance = WebServerResource.from_json(json)
# print the JSON string representation of the object
print(WebServerResource.to_json())

# convert the object into a dict
web_server_resource_dict = web_server_resource_instance.to_dict()
# create an instance of WebServerResource from a dict
web_server_resource_from_dict = WebServerResource.from_dict(web_server_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


