# OriginProperties

The JSON object that contains the properties of the origin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported. | 
**http_port** | **int** | The value of the HTTP port. Must be between 1 and 65535. | [optional] 
**https_port** | **int** | The value of the https port. Must be between 1 and 65535. | [optional] 
**provisioning_state** | **str** | Provisioning status of the origin. | [optional] [readonly] 
**resource_state** | **str** | Resource status of the origin. | [optional] [readonly] 

## Example

```python
from openapi_client.models.origin_properties import OriginProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OriginProperties from a JSON string
origin_properties_instance = OriginProperties.from_json(json)
# print the JSON string representation of the object
print(OriginProperties.to_json())

# convert the object into a dict
origin_properties_dict = origin_properties_instance.to_dict()
# create an instance of OriginProperties from a dict
origin_properties_from_dict = OriginProperties.from_dict(origin_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


