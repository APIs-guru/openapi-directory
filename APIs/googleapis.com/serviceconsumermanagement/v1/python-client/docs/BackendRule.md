# BackendRule

A backend rule provides configuration for an individual API element.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of the API backend. The scheme is used to determine the backend protocol and security. The following schemes are accepted: SCHEME PROTOCOL SECURITY http:// HTTP None https:// HTTP TLS grpc:// gRPC None grpcs:// gRPC TLS It is recommended to explicitly include a scheme. Leaving out the scheme may cause constrasting behaviors across platforms. If the port is unspecified, the default is: - 80 for schemes without TLS - 443 for schemes with TLS For HTTP backends, use protocol to specify the protocol version. | [optional] 
**deadline** | **float** | The number of seconds to wait for a response from a request. The default varies based on the request protocol and deployment environment. | [optional] 
**disable_auth** | **bool** | When disable_auth is true, a JWT ID token won&#39;t be generated and the original \&quot;Authorization\&quot; HTTP header will be preserved. If the header is used to carry the original token and is expected by the backend, this field must be set to true to preserve the header. | [optional] 
**jwt_audience** | **str** | The JWT audience is used when generating a JWT ID token for the backend. This ID token will be added in the HTTP \&quot;authorization\&quot; header, and sent to the backend. | [optional] 
**min_deadline** | **float** | Deprecated, do not use. | [optional] 
**operation_deadline** | **float** | The number of seconds to wait for the completion of a long running operation. The default is no deadline. | [optional] 
**overrides_by_request_protocol** | [**Dict[str, BackendRule]**](BackendRule.md) | The map between request protocol and the backend address. | [optional] 
**path_translation** | **str** |  | [optional] 
**protocol** | **str** | The protocol used for sending a request to the backend. The supported values are \&quot;http/1.1\&quot; and \&quot;h2\&quot;. The default value is inferred from the scheme in the address field: SCHEME PROTOCOL http:// http/1.1 https:// http/1.1 grpc:// h2 grpcs:// h2 For secure HTTP backends (https://) that support HTTP/2, set this field to \&quot;h2\&quot; for improved performance. Configuring this field to non-default values is only supported for secure HTTP backends. This field will be ignored for all other backends. See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for more details on the supported values. | [optional] 
**selector** | **str** | Selects the methods to which this rule applies. Refer to selector for syntax details. | [optional] 

## Example

```python
from openapi_client.models.backend_rule import BackendRule

# TODO update the JSON string below
json = "{}"
# create an instance of BackendRule from a JSON string
backend_rule_instance = BackendRule.from_json(json)
# print the JSON string representation of the object
print(BackendRule.to_json())

# convert the object into a dict
backend_rule_dict = backend_rule_instance.to_dict()
# create an instance of BackendRule from a dict
backend_rule_from_dict = BackendRule.from_dict(backend_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


