# GoogleCloudApigeeV1TlsInfo

TLS configuration information for virtual hosts and TargetServers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphers** | **List[str]** | The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3. | [optional] 
**client_auth_enabled** | **bool** | Optional. Enables two-way TLS. | [optional] 
**common_name** | [**GoogleCloudApigeeV1TlsInfoCommonName**](GoogleCloudApigeeV1TlsInfoCommonName.md) |  | [optional] 
**enabled** | **bool** | Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled. | [optional] 
**ignore_validation_errors** | **bool** | If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails. | [optional] 
**key_alias** | **str** | Required if &#x60;client_auth_enabled&#x60; is true. The resource ID for the alias containing the private key and cert. | [optional] 
**key_store** | **str** | Required if &#x60;client_auth_enabled&#x60; is true. The resource ID of the keystore. | [optional] 
**protocols** | **List[str]** | The TLS versioins to be used. | [optional] 
**trust_store** | **str** | The resource ID of the truststore. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_tls_info import GoogleCloudApigeeV1TlsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TlsInfo from a JSON string
google_cloud_apigee_v1_tls_info_instance = GoogleCloudApigeeV1TlsInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TlsInfo.to_json())

# convert the object into a dict
google_cloud_apigee_v1_tls_info_dict = google_cloud_apigee_v1_tls_info_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TlsInfo from a dict
google_cloud_apigee_v1_tls_info_from_dict = GoogleCloudApigeeV1TlsInfo.from_dict(google_cloud_apigee_v1_tls_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


