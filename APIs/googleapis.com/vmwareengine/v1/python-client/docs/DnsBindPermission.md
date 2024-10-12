# DnsBindPermission

DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Output only. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource and location can only be global. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/global/dnsBindPermission&#x60; | [optional] [readonly] 
**principals** | [**List[Principal]**](Principal.md) | Output only. Users/Service accounts which have access for binding on the intranet VPC project corresponding to the consumer project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dns_bind_permission import DnsBindPermission

# TODO update the JSON string below
json = "{}"
# create an instance of DnsBindPermission from a JSON string
dns_bind_permission_instance = DnsBindPermission.from_json(json)
# print the JSON string representation of the object
print(DnsBindPermission.to_json())

# convert the object into a dict
dns_bind_permission_dict = dns_bind_permission_instance.to_dict()
# create an instance of DnsBindPermission from a dict
dns_bind_permission_from_dict = DnsBindPermission.from_dict(dns_bind_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


