# SqlIpConfig

IP Management configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_ip_range** | **str** | Optional. The name of the allocated IP address range for the private IP Cloud SQL instance. This name refers to an already allocated IP range address. If set, the instance IP address will be created in the allocated range. Note that this IP address range can&#39;t be modified after the instance is created. If you change the VPC when configuring connectivity settings for the migration job, this field is not relevant. | [optional] 
**authorized_networks** | [**List[SqlAclEntry]**](SqlAclEntry.md) | The list of external networks that are allowed to connect to the instance using the IP. See https://en.wikipedia.org/wiki/CIDR_notation#CIDR_notation, also known as &#39;slash&#39; notation (e.g. &#x60;192.168.100.0/24&#x60;). | [optional] 
**enable_ipv4** | **bool** | Whether the instance should be assigned an IPv4 address or not. | [optional] 
**private_network** | **str** | The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, &#x60;projects/myProject/global/networks/default&#x60;. This setting can be updated, but it cannot be removed after it is set. | [optional] 
**require_ssl** | **bool** | Whether SSL connections over IP should be enforced or not. | [optional] 

## Example

```python
from openapi_client.models.sql_ip_config import SqlIpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SqlIpConfig from a JSON string
sql_ip_config_instance = SqlIpConfig.from_json(json)
# print the JSON string representation of the object
print(SqlIpConfig.to_json())

# convert the object into a dict
sql_ip_config_dict = sql_ip_config_instance.to_dict()
# create an instance of SqlIpConfig from a dict
sql_ip_config_from_dict = SqlIpConfig.from_dict(sql_ip_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


