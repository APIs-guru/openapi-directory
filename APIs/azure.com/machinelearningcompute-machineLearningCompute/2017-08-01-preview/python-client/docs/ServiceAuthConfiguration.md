# ServiceAuthConfiguration

Global service auth configuration properties. These are the data-plane authorization keys and are used if a service doesn't define it's own.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_auth_key_hash** | **str** | The primary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API. | 
**secondary_auth_key_hash** | **str** | The secondary auth key hash. This is not returned in response of GET/PUT on the resource.. To see this please call listKeys API. | 

## Example

```python
from openapi_client.models.service_auth_configuration import ServiceAuthConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAuthConfiguration from a JSON string
service_auth_configuration_instance = ServiceAuthConfiguration.from_json(json)
# print the JSON string representation of the object
print(ServiceAuthConfiguration.to_json())

# convert the object into a dict
service_auth_configuration_dict = service_auth_configuration_instance.to_dict()
# create an instance of ServiceAuthConfiguration from a dict
service_auth_configuration_from_dict = ServiceAuthConfiguration.from_dict(service_auth_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


