# IpConfiguration

IP Management configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_ip_range** | **str** | The name of the allocated ip range for the private ip Cloud SQL instance. For example: \&quot;google-managed-services-default\&quot;. If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression &#x60;[a-z]([-a-z0-9]*[a-z0-9])?.&#x60; | [optional] 
**authorized_networks** | [**List[AclEntry]**](AclEntry.md) | The list of external networks that are allowed to connect to the instance using the IP. In &#39;CIDR&#39; notation, also known as &#39;slash&#39; notation (for example: &#x60;157.197.200.0/24&#x60;). | [optional] 
**enable_private_path_for_google_cloud_services** | **bool** | Controls connectivity to private IP instances from Google services, such as BigQuery. | [optional] 
**ipv4_enabled** | **bool** | Whether the instance is assigned a public IP address or not. | [optional] 
**private_network** | **str** | The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, &#x60;/projects/myProject/global/networks/default&#x60;. This setting can be updated, but it cannot be removed after it is set. | [optional] 
**psc_config** | [**PscConfig**](PscConfig.md) |  | [optional] 
**require_ssl** | **bool** | Use &#x60;ssl_mode&#x60; instead for MySQL and PostgreSQL. SQL Server uses this flag. Whether SSL/TLS connections over IP are enforced. If set to false, then allow both non-SSL/non-TLS and SSL/TLS connections. For SSL/TLS connections, the client certificate won&#39;t be verified. If set to true, then only allow connections encrypted with SSL/TLS and with valid client certificates. If you want to enforce SSL/TLS without enforcing the requirement for valid client certificates, then use the &#x60;ssl_mode&#x60; flag instead of the &#x60;require_ssl&#x60; flag. | [optional] 
**ssl_mode** | **str** | Specify how SSL/TLS is enforced in database connections. MySQL and PostgreSQL use the &#x60;ssl_mode&#x60; flag. If you must use the &#x60;require_ssl&#x60; flag for backward compatibility, then only the following value pairs are valid: * &#x60;ssl_mode&#x3D;ALLOW_UNENCRYPTED_AND_ENCRYPTED&#x60; and &#x60;require_ssl&#x3D;false&#x60; * &#x60;ssl_mode&#x3D;ENCRYPTED_ONLY&#x60; and &#x60;require_ssl&#x3D;false&#x60; * &#x60;ssl_mode&#x3D;TRUSTED_CLIENT_CERTIFICATE_REQUIRED&#x60; and &#x60;require_ssl&#x3D;true&#x60; The value of &#x60;ssl_mode&#x60; gets priority over the value of &#x60;require_ssl&#x60;. For example, for the pair &#x60;ssl_mode&#x3D;ENCRYPTED_ONLY&#x60; and &#x60;require_ssl&#x3D;false&#x60;, the &#x60;ssl_mode&#x3D;ENCRYPTED_ONLY&#x60; means only accept SSL connections, while the &#x60;require_ssl&#x3D;false&#x60; means accept both non-SSL and SSL connections. MySQL and PostgreSQL databases respect &#x60;ssl_mode&#x60; in this case and accept only SSL connections. SQL Server uses the &#x60;require_ssl&#x60; flag. You can set the value for this flag to &#x60;true&#x60; or &#x60;false&#x60;. | [optional] 

## Example

```python
from openapi_client.models.ip_configuration import IpConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of IpConfiguration from a JSON string
ip_configuration_instance = IpConfiguration.from_json(json)
# print the JSON string representation of the object
print(IpConfiguration.to_json())

# convert the object into a dict
ip_configuration_dict = ip_configuration_instance.to_dict()
# create an instance of IpConfiguration from a dict
ip_configuration_from_dict = IpConfiguration.from_dict(ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


