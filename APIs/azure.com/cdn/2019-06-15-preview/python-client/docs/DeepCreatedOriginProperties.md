# DeepCreatedOriginProperties

Properties of the origin created on the CDN endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The address of the origin. It can be a domain name, IPv4 address, or IPv6 address. | 
**http_port** | **int** | The value of the HTTP port. Must be between 1 and 65535 | [optional] 
**https_port** | **int** | The value of the HTTPS port. Must be between 1 and 65535 | [optional] 

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


