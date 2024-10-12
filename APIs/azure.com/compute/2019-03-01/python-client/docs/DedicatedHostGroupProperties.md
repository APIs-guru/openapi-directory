# DedicatedHostGroupProperties

Dedicated Host Group Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hosts** | [**List[SubResourceReadOnly]**](SubResourceReadOnly.md) | A list of references to all dedicated hosts in the dedicated host group. | [optional] [readonly] 
**platform_fault_domain_count** | **int** | Number of fault domains that the host group can span. | 

## Example

```python
from openapi_client.models.dedicated_host_group_properties import DedicatedHostGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostGroupProperties from a JSON string
dedicated_host_group_properties_instance = DedicatedHostGroupProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostGroupProperties.to_json())

# convert the object into a dict
dedicated_host_group_properties_dict = dedicated_host_group_properties_instance.to_dict()
# create an instance of DedicatedHostGroupProperties from a dict
dedicated_host_group_properties_from_dict = DedicatedHostGroupProperties.from_dict(dedicated_host_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


