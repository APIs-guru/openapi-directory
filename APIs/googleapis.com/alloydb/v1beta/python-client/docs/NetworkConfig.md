# NetworkConfig

Metadata related to network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_ip_range** | **str** | Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: \&quot;google-managed-services-default\&quot;. If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60;. Field name is intended to be consistent with Cloud SQL. | [optional] 
**network** | **str** | Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: &#x60;projects/{project_number}/global/networks/{network_id}&#x60;. This is required to create a cluster. | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


