# ListAddressGroupReferencesResponseAddressGroupReference

The Reference of AddressGroup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firewall_policy** | **str** | FirewallPolicy that is using the Address Group. | [optional] 
**rule_priority** | **int** | Rule priority of the FirewallPolicy that is using the Address Group. | [optional] 
**security_policy** | **str** | Cloud Armor SecurityPolicy that is using the Address Group. | [optional] 

## Example

```python
from openapi_client.models.list_address_group_references_response_address_group_reference import ListAddressGroupReferencesResponseAddressGroupReference

# TODO update the JSON string below
json = "{}"
# create an instance of ListAddressGroupReferencesResponseAddressGroupReference from a JSON string
list_address_group_references_response_address_group_reference_instance = ListAddressGroupReferencesResponseAddressGroupReference.from_json(json)
# print the JSON string representation of the object
print(ListAddressGroupReferencesResponseAddressGroupReference.to_json())

# convert the object into a dict
list_address_group_references_response_address_group_reference_dict = list_address_group_references_response_address_group_reference_instance.to_dict()
# create an instance of ListAddressGroupReferencesResponseAddressGroupReference from a dict
list_address_group_references_response_address_group_reference_from_dict = ListAddressGroupReferencesResponseAddressGroupReference.from_dict(list_address_group_references_response_address_group_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


