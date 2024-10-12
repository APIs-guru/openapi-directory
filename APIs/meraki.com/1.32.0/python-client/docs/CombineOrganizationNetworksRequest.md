# CombineOrganizationNetworksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_string** | **str** | A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by &#39;-network_type&#39;. If left empty, all exisitng enrollment strings will be deleted. | [optional] 
**name** | **str** | The name of the combined network | 
**network_ids** | **List[str]** | A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network | 

## Example

```python
from openapi_client.models.combine_organization_networks_request import CombineOrganizationNetworksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CombineOrganizationNetworksRequest from a JSON string
combine_organization_networks_request_instance = CombineOrganizationNetworksRequest.from_json(json)
# print the JSON string representation of the object
print(CombineOrganizationNetworksRequest.to_json())

# convert the object into a dict
combine_organization_networks_request_dict = combine_organization_networks_request_instance.to_dict()
# create an instance of CombineOrganizationNetworksRequest from a dict
combine_organization_networks_request_from_dict = CombineOrganizationNetworksRequest.from_dict(combine_organization_networks_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


