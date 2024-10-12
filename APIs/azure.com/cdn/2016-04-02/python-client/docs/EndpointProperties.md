# EndpointProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_types_to_compress** | **List[str]** | List of content types on which compression will be applied. The value for the elements should be a valid MIME type. | [optional] 
**host_name** | **str** | The host name of the endpoint {endpointName}.{DNSZone} | [optional] [readonly] 
**is_compression_enabled** | **bool** | Indicates whether the compression is enabled. Default value is false. If compression is enabled, the content transferred from cdn endpoint to end user will be compressed. The requested content must be larger than 1 byte and smaller than 1 MB. | [optional] 
**is_http_allowed** | **bool** | Indicates whether HTTP traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed. | [optional] 
**is_https_allowed** | **bool** | Indicates whether https traffic is allowed on the endpoint. Default value is true. At least one protocol (HTTP or HTTPS) must be allowed. | [optional] 
**origin_host_header** | **str** | The host header the CDN provider will send along with content requests to origins. The default value is the host name of the origin. | [optional] 
**origin_path** | **str** | The path used for origin requests. | [optional] 
**origins** | [**List[DeepCreatedOrigin]**](DeepCreatedOrigin.md) | The set of origins for the CDN endpoint. When multiple origins exist, the first origin will be used as primary and rest will be used as failover options. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**query_string_caching_behavior** | [**QueryStringCachingBehavior**](QueryStringCachingBehavior.md) |  | [optional] 
**resource_state** | **str** | Resource status of the endpoint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint_properties import EndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointProperties from a JSON string
endpoint_properties_instance = EndpointProperties.from_json(json)
# print the JSON string representation of the object
print(EndpointProperties.to_json())

# convert the object into a dict
endpoint_properties_dict = endpoint_properties_instance.to_dict()
# create an instance of EndpointProperties from a dict
endpoint_properties_from_dict = EndpointProperties.from_dict(endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


