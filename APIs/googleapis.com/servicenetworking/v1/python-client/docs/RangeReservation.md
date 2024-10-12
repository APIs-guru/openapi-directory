# RangeReservation

Represents a range reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_prefix_length** | **int** | Required. The size of the desired subnet. Use usual CIDR range notation. For example, &#39;29&#39; to find unused x.x.x.x/29 CIDR range. The goal is to determine if one of the allocated ranges has enough free space for a subnet of the requested size. GCE disallows subnets with prefix_length &gt; 29 | [optional] 
**requested_ranges** | **List[str]** | Optional. The name of one or more allocated IP address ranges associated with this private service access connection. If no range names are provided all ranges associated with this connection will be considered. If a CIDR range with the specified IP prefix length is not available within these ranges the validation fails. | [optional] 
**secondary_range_ip_prefix_lengths** | **List[int]** | Optional. The size of the desired secondary ranges for the subnet. Use usual CIDR range notation. For example, &#39;29&#39; to find unused x.x.x.x/29 CIDR range. The goal is to determine that the allocated ranges have enough free space for all the requested secondary ranges. GCE disallows subnets with prefix_length &gt; 29 | [optional] 
**subnetwork_candidates** | [**List[Subnetwork]**](Subnetwork.md) | Optional. List of subnetwork candidates to validate. The required input fields are &#x60;name&#x60;, &#x60;network&#x60;, and &#x60;region&#x60;. Subnetworks from this list which exist will be returned in the response with the &#x60;ip_cidr_range&#x60;, &#x60;secondary_ip_cider_ranges&#x60;, and &#x60;outside_allocation&#x60; fields set. | [optional] 

## Example

```python
from openapi_client.models.range_reservation import RangeReservation

# TODO update the JSON string below
json = "{}"
# create an instance of RangeReservation from a JSON string
range_reservation_instance = RangeReservation.from_json(json)
# print the JSON string representation of the object
print(RangeReservation.to_json())

# convert the object into a dict
range_reservation_dict = range_reservation_instance.to_dict()
# create an instance of RangeReservation from a dict
range_reservation_from_dict = RangeReservation.from_dict(range_reservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


