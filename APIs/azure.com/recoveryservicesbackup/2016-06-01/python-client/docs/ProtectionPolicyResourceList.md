# ProtectionPolicyResourceList

The list of ProtectionPolicy resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ProtectionPolicyResource]**](ProtectionPolicyResource.md) | The list of resources. | [optional] 
**next_link** | **str** | The URI to GET the next page of resources. Call ListNext() gets the next page of resources. | [optional] 

## Example

```python
from openapi_client.models.protection_policy_resource_list import ProtectionPolicyResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionPolicyResourceList from a JSON string
protection_policy_resource_list_instance = ProtectionPolicyResourceList.from_json(json)
# print the JSON string representation of the object
print(ProtectionPolicyResourceList.to_json())

# convert the object into a dict
protection_policy_resource_list_dict = protection_policy_resource_list_instance.to_dict()
# create an instance of ProtectionPolicyResourceList from a dict
protection_policy_resource_list_from_dict = ProtectionPolicyResourceList.from_dict(protection_policy_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


