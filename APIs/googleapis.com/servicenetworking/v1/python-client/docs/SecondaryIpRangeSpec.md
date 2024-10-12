# SecondaryIpRangeSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_prefix_length** | **int** | Required. The prefix length of the secondary IP range. Use CIDR range notation, such as &#x60;30&#x60; to provision a secondary IP range with an &#x60;x.x.x.x/30&#x60; CIDR range. The IP address range is drawn from a pool of available ranges in the service consumer&#39;s allocated range. | [optional] 
**outside_allocation_public_ip_range** | **str** | Optional. Enable outside allocation using public IP addresses. Any public IP range may be specified. If this field is provided, we will not use customer reserved ranges for this secondary IP range. | [optional] 
**range_name** | **str** | Required. A name for the secondary IP range. The name must be 1-63 characters long, and comply with RFC1035. The name must be unique within the subnetwork. | [optional] 
**requested_address** | **str** | Optional. The starting address of a range. The address must be a valid IPv4 address in the x.x.x.x format. This value combined with the IP prefix range is the CIDR range for the secondary IP range. The range must be within the allocated range that is assigned to the private connection. If the CIDR range isn&#39;t available, the call fails. | [optional] 

## Example

```python
from openapi_client.models.secondary_ip_range_spec import SecondaryIpRangeSpec

# TODO update the JSON string below
json = "{}"
# create an instance of SecondaryIpRangeSpec from a JSON string
secondary_ip_range_spec_instance = SecondaryIpRangeSpec.from_json(json)
# print the JSON string representation of the object
print(SecondaryIpRangeSpec.to_json())

# convert the object into a dict
secondary_ip_range_spec_dict = secondary_ip_range_spec_instance.to_dict()
# create an instance of SecondaryIpRangeSpec from a dict
secondary_ip_range_spec_from_dict = SecondaryIpRangeSpec.from_dict(secondary_ip_range_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


