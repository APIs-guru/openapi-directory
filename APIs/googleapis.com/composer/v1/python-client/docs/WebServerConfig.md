# WebServerConfig

The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values. | [optional] 

## Example

```python
from openapi_client.models.web_server_config import WebServerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WebServerConfig from a JSON string
web_server_config_instance = WebServerConfig.from_json(json)
# print the JSON string representation of the object
print(WebServerConfig.to_json())

# convert the object into a dict
web_server_config_dict = web_server_config_instance.to_dict()
# create an instance of WebServerConfig from a dict
web_server_config_from_dict = WebServerConfig.from_dict(web_server_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


