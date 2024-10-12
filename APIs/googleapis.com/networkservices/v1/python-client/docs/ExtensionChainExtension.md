# ExtensionChainExtension

A single extension in the chain to execute for the matching request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **str** | Optional. The &#x60;:authority&#x60; header in the gRPC request sent from Envoy to the extension service. Required for Callout extensions. | [optional] 
**fail_open** | **bool** | Optional. Determines how the proxy behaves if the call to the extension fails or times out. When set to &#x60;TRUE&#x60;, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to &#x60;FALSE&#x60; or the default setting of &#x60;FALSE&#x60; is used, one of the following happens: * If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer. * If response headers have been delivered, then the HTTP stream to the downstream client is reset. | [optional] 
**forward_headers** | **List[str]** | Optional. List of the HTTP headers to forward to the extension (from the client or backend). If omitted, all headers are sent. Each element is a string indicating the header name. | [optional] 
**name** | **str** | Required. The name for this extension. The name is logged as part of the HTTP request logs. The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens, and can have a maximum length of 63 characters. Additionally, the first character must be a letter and the last a letter or a number. | [optional] 
**service** | **str** | Required. The reference to the service that runs the extension. Currently only callout extensions are supported here. To configure a callout extension, &#x60;service&#x60; must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format: &#x60;https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService}&#x60; or &#x60;https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}&#x60;. | [optional] 
**supported_events** | **List[str]** | Optional. A set of events during request or response processing for which this extension is called. This field is required for the &#x60;LbTrafficExtension&#x60; resource. It&#39;s not relevant for the &#x60;LbRouteExtension&#x60; resource. | [optional] 
**timeout** | **str** | Optional. Specifies the timeout for each individual message on the stream. The timeout must be between 10-1000 milliseconds. Required for Callout extensions. | [optional] 

## Example

```python
from openapi_client.models.extension_chain_extension import ExtensionChainExtension

# TODO update the JSON string below
json = "{}"
# create an instance of ExtensionChainExtension from a JSON string
extension_chain_extension_instance = ExtensionChainExtension.from_json(json)
# print the JSON string representation of the object
print(ExtensionChainExtension.to_json())

# convert the object into a dict
extension_chain_extension_dict = extension_chain_extension_instance.to_dict()
# create an instance of ExtensionChainExtension from a dict
extension_chain_extension_from_dict = ExtensionChainExtension.from_dict(extension_chain_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


