# GlobalServiceConfiguration

Global configuration for services in the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_scale** | [**AutoScaleConfiguration**](AutoScaleConfiguration.md) |  | [optional] 
**etag** | **str** | The configuration ETag for updates. | [optional] 
**service_auth** | [**ServiceAuthConfiguration**](ServiceAuthConfiguration.md) |  | [optional] 
**ssl** | [**SslConfiguration**](SslConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.global_service_configuration import GlobalServiceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalServiceConfiguration from a JSON string
global_service_configuration_instance = GlobalServiceConfiguration.from_json(json)
# print the JSON string representation of the object
print(GlobalServiceConfiguration.to_json())

# convert the object into a dict
global_service_configuration_dict = global_service_configuration_instance.to_dict()
# create an instance of GlobalServiceConfiguration from a dict
global_service_configuration_from_dict = GlobalServiceConfiguration.from_dict(global_service_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


