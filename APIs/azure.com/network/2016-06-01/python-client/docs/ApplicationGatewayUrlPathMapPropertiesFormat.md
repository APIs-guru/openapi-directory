# ApplicationGatewayUrlPathMapPropertiesFormat

Properties of UrlPathMap of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_backend_address_pool** | [**SubResource**](SubResource.md) |  | [optional] 
**default_backend_http_settings** | [**SubResource**](SubResource.md) |  | [optional] 
**path_rules** | [**List[ApplicationGatewayPathRule]**](ApplicationGatewayPathRule.md) | Path rule of URL path map resource | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.application_gateway_url_path_map_properties_format import ApplicationGatewayUrlPathMapPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayUrlPathMapPropertiesFormat from a JSON string
application_gateway_url_path_map_properties_format_instance = ApplicationGatewayUrlPathMapPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayUrlPathMapPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_url_path_map_properties_format_dict = application_gateway_url_path_map_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayUrlPathMapPropertiesFormat from a dict
application_gateway_url_path_map_properties_format_from_dict = ApplicationGatewayUrlPathMapPropertiesFormat.from_dict(application_gateway_url_path_map_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


