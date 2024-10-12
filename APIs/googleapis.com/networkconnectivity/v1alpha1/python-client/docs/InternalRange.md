# InternalRange

The internal range resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (its usage and peering behavior). Networking resources can link to this range if they are created as belonging to it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Time when the internal range was created. | [optional] 
**description** | **str** | A description of this resource. | [optional] 
**ip_cidr_range** | **str** | IP range that this internal range defines. | [optional] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**name** | **str** | Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names | [optional] 
**network** | **str** | The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123 | [optional] 
**overlaps** | **List[str]** | Optional. Types of resources that are allowed to overlap with the current internal range. | [optional] 
**peering** | **str** | The type of peering set for this internal range. | [optional] 
**prefix_length** | **int** | An alternative to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. | [optional] 
**target_cidr_range** | **List[str]** | Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the \&quot;10.0.0.0/8\&quot; address space. This can be used to search in other rfc-1918 address spaces like \&quot;172.16.0.0/12\&quot; and \&quot;192.168.0.0/16\&quot; or non-rfc-1918 address spaces used in the VPC. | [optional] 
**update_time** | **str** | Time when the internal range was updated. | [optional] 
**usage** | **str** | The type of usage set for this internal range. | [optional] 
**users** | **List[str]** | Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range that is referred to. Can be empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.internal_range import InternalRange

# TODO update the JSON string below
json = "{}"
# create an instance of InternalRange from a JSON string
internal_range_instance = InternalRange.from_json(json)
# print the JSON string representation of the object
print(InternalRange.to_json())

# convert the object into a dict
internal_range_dict = internal_range_instance.to_dict()
# create an instance of InternalRange from a dict
internal_range_from_dict = InternalRange.from_dict(internal_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


