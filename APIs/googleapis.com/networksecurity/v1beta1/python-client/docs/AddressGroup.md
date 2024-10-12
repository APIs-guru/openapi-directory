# AddressGroup

AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Required. Capacity of the Address Group | [optional] 
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. Free-text description of the resource. | [optional] 
**items** | **List[str]** | Optional. List of items. | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the AddressGroup resource. | [optional] 
**name** | **str** | Required. Name of the AddressGroup resource. It matches pattern &#x60;projects/*/locations/{location}/addressGroups/&#x60;. | [optional] 
**self_link** | **str** | Output only. Server-defined fully-qualified URL for this resource. | [optional] [readonly] 
**type** | **str** | Required. The type of the Address Group. Possible values are \&quot;IPv4\&quot; or \&quot;IPV6\&quot;. | [optional] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.address_group import AddressGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AddressGroup from a JSON string
address_group_instance = AddressGroup.from_json(json)
# print the JSON string representation of the object
print(AddressGroup.to_json())

# convert the object into a dict
address_group_dict = address_group_instance.to_dict()
# create an instance of AddressGroup from a dict
address_group_from_dict = AddressGroup.from_dict(address_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


