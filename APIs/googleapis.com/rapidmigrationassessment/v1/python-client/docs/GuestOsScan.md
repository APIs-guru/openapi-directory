# GuestOsScan

Message describing a MC Source of type Guest OS Scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_source** | **str** | reference to the corresponding Guest OS Scan in MC Source. | [optional] 

## Example

```python
from openapi_client.models.guest_os_scan import GuestOsScan

# TODO update the JSON string below
json = "{}"
# create an instance of GuestOsScan from a JSON string
guest_os_scan_instance = GuestOsScan.from_json(json)
# print the JSON string representation of the object
print(GuestOsScan.to_json())

# convert the object into a dict
guest_os_scan_dict = guest_os_scan_instance.to_dict()
# create an instance of GuestOsScan from a dict
guest_os_scan_from_dict = GuestOsScan.from_dict(guest_os_scan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


