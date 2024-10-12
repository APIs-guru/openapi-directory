# OriginUpdatePropertiesParameters

The JSON object that contains the properties of the origin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Origin is enabled for load balancing or not | [optional] 
**host_name** | **str** | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported.This should be unique across all origins in an endpoint. | [optional] 
**http_port** | **int** | The value of the HTTP port. Must be between 1 and 65535. | [optional] 
**https_port** | **int** | The value of the HTTPS port. Must be between 1 and 65535. | [optional] 
**origin_host_header** | **str** | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. This overrides the host header defined at Endpoint | [optional] 
**priority** | **int** | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5 | [optional] 
**weight** | **int** | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | [optional] 

## Example

```python
from openapi_client.models.origin_update_properties_parameters import OriginUpdatePropertiesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OriginUpdatePropertiesParameters from a JSON string
origin_update_properties_parameters_instance = OriginUpdatePropertiesParameters.from_json(json)
# print the JSON string representation of the object
print(OriginUpdatePropertiesParameters.to_json())

# convert the object into a dict
origin_update_properties_parameters_dict = origin_update_properties_parameters_instance.to_dict()
# create an instance of OriginUpdatePropertiesParameters from a dict
origin_update_properties_parameters_from_dict = OriginUpdatePropertiesParameters.from_dict(origin_update_properties_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


