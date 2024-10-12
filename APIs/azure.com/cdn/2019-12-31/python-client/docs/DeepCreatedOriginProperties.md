# DeepCreatedOriginProperties

Properties of the origin created on the CDN endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Origin is enabled for load balancing or not. By default, origin is always enabled. | [optional] 
**host_name** | **str** | The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. This should be unique across all origins in an endpoint. | 
**http_port** | **int** | The value of the HTTP port. Must be between 1 and 65535. | [optional] 
**https_port** | **int** | The value of the HTTPS port. Must be between 1 and 65535. | [optional] 
**origin_host_header** | **str** | The host header value sent to the origin with each request. If you leave this blank, the request hostname determines this value. Azure CDN origins, such as Web Apps, Blob Storage, and Cloud Services require this host header value to match the origin hostname by default. | [optional] 
**priority** | **int** | Priority of origin in given origin group for load balancing. Higher priorities will not be used for load balancing if any lower priority origin is healthy.Must be between 1 and 5. | [optional] 
**weight** | **int** | Weight of the origin in given origin group for load balancing. Must be between 1 and 1000 | [optional] 

## Example

```python
from openapi_client.models.deep_created_origin_properties import DeepCreatedOriginProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeepCreatedOriginProperties from a JSON string
deep_created_origin_properties_instance = DeepCreatedOriginProperties.from_json(json)
# print the JSON string representation of the object
print(DeepCreatedOriginProperties.to_json())

# convert the object into a dict
deep_created_origin_properties_dict = deep_created_origin_properties_instance.to_dict()
# create an instance of DeepCreatedOriginProperties from a dict
deep_created_origin_properties_from_dict = DeepCreatedOriginProperties.from_dict(deep_created_origin_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


