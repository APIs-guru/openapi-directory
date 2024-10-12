# HttpEndpoint

Represents a HTTP endpoint destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: &#x60;http://10.10.10.8:80/route&#x60;, &#x60;http://svc.us-central1.p.local:8080/&#x60;. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS. | [optional] 

## Example

```python
from openapi_client.models.http_endpoint import HttpEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of HttpEndpoint from a JSON string
http_endpoint_instance = HttpEndpoint.from_json(json)
# print the JSON string representation of the object
print(HttpEndpoint.to_json())

# convert the object into a dict
http_endpoint_dict = http_endpoint_instance.to_dict()
# create an instance of HttpEndpoint from a dict
http_endpoint_from_dict = HttpEndpoint.from_dict(http_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


