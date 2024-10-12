# ApplicationGatewayUrlPathMapPropertiesFormat

Properties of UrlPathMap of the application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_backend_address_pool** | [**Model0**](Model0.md) |  | [optional] 
**default_backend_http_settings** | [**Model0**](Model0.md) |  | [optional] 
**path_rules** | **List[object]** | Path rule of URL path map resource. | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 

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


