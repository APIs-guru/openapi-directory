# ServiceConfig

Configuration for a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Optional. Domain name of the service. Example: console.cloud.google | [optional] 

## Example

```python
from openapi_client.models.service_config import ServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConfig from a JSON string
service_config_instance = ServiceConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceConfig.to_json())

# convert the object into a dict
service_config_dict = service_config_instance.to_dict()
# create an instance of ServiceConfig from a dict
service_config_from_dict = ServiceConfig.from_dict(service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


