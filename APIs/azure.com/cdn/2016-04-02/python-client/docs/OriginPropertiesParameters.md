# OriginPropertiesParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name** | **str** | The address of the origin. Domain names, IPv4 addresses, and IPv6 addresses are supported. | 
**http_port** | **int** | The value of the HTTP port. Must be between 1 and 65535. | [optional] 
**https_port** | **int** | The value of the HTTPS port. Must be between 1 and 65535. | [optional] 

## Example

```python
from openapi_client.models.origin_properties_parameters import OriginPropertiesParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OriginPropertiesParameters from a JSON string
origin_properties_parameters_instance = OriginPropertiesParameters.from_json(json)
# print the JSON string representation of the object
print(OriginPropertiesParameters.to_json())

# convert the object into a dict
origin_properties_parameters_dict = origin_properties_parameters_instance.to_dict()
# create an instance of OriginPropertiesParameters from a dict
origin_properties_parameters_from_dict = OriginPropertiesParameters.from_dict(origin_properties_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


