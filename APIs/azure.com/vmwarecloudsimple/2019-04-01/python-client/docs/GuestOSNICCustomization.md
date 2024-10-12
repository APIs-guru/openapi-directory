# GuestOSNICCustomization

Guest OS nic customization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation** | **str** | IP address allocation method | [optional] 
**dns_servers** | **List[str]** | List of dns servers to use | [optional] 
**gateway** | **List[str]** | Gateway addresses assigned to nic | [optional] 
**ip_address** | **str** |  | [optional] 
**mask** | **str** |  | [optional] 
**primary_wins_server** | **str** |  | [optional] 
**secondary_wins_server** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.guest_osnic_customization import GuestOSNICCustomization

# TODO update the JSON string below
json = "{}"
# create an instance of GuestOSNICCustomization from a JSON string
guest_osnic_customization_instance = GuestOSNICCustomization.from_json(json)
# print the JSON string representation of the object
print(GuestOSNICCustomization.to_json())

# convert the object into a dict
guest_osnic_customization_dict = guest_osnic_customization_instance.to_dict()
# create an instance of GuestOSNICCustomization from a dict
guest_osnic_customization_from_dict = GuestOSNICCustomization.from_dict(guest_osnic_customization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


