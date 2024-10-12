# EndpointPropertiesUpdateParameters

Result of the request to list endpoints. It contains a list of endpoints and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_types_to_compress** | **List[str]** | List of content types on which compression applies. The value should be a valid MIME type. | [optional] 
**geo_filters** | [**List[GeoFilter]**](GeoFilter.md) | List of rules defining user geo access within a CDN endpoint. Each geo filter defines an access rule to a specified path or content, e.g. block APAC for path /pictures/ | [optional] 
**is_compression_enabled** | **bool** | Indicates whether content compression is enabled on CDN. Default value is false. If compression is enabled, content will be served as compressed if user requests for a compressed version. Content won&#39;t be compressed on CDN when requested content is smaller than 1 byte or larger than 1 MB. | [optional] 
**is_http_allowed** | **bool** | Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed. | [optional] 
**is_https_allowed** | **bool** | Indicates whether HTTPS traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed. | [optional] 
**optimization_type** | [**OptimizationType**](OptimizationType.md) |  | [optional] 
**origin_host_header** | **str** | The host header CDN sends along with content requests to origin. The default value is the host name of the origin. | [optional] 
**origin_path** | **str** | The path used when CDN sends request to origin. | [optional] 
**query_string_caching_behavior** | [**QueryStringCachingBehavior**](QueryStringCachingBehavior.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_properties_update_parameters import EndpointPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPropertiesUpdateParameters from a JSON string
endpoint_properties_update_parameters_instance = EndpointPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EndpointPropertiesUpdateParameters.to_json())

# convert the object into a dict
endpoint_properties_update_parameters_dict = endpoint_properties_update_parameters_instance.to_dict()
# create an instance of EndpointPropertiesUpdateParameters from a dict
endpoint_properties_update_parameters_from_dict = EndpointPropertiesUpdateParameters.from_dict(endpoint_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


