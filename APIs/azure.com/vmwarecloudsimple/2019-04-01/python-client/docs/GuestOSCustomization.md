# GuestOSCustomization

Guest OS Customization properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_servers** | **List[str]** | List of dns servers to use | [optional] 
**host_name** | **str** | Virtual Machine hostname | [optional] 
**password** | **str** | Password for login | [optional] 
**policy_id** | **str** | id of customization policy | [optional] 
**username** | **str** | Username for login | [optional] 

## Example

```python
from openapi_client.models.guest_os_customization import GuestOSCustomization

# TODO update the JSON string below
json = "{}"
# create an instance of GuestOSCustomization from a JSON string
guest_os_customization_instance = GuestOSCustomization.from_json(json)
# print the JSON string representation of the object
print(GuestOSCustomization.to_json())

# convert the object into a dict
guest_os_customization_dict = guest_os_customization_instance.to_dict()
# create an instance of GuestOSCustomization from a dict
guest_os_customization_from_dict = GuestOSCustomization.from_dict(guest_os_customization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


