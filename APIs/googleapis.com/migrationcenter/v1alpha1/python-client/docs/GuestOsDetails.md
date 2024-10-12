# GuestOsDetails

Information from Guest-level collections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GuestConfigDetails**](GuestConfigDetails.md) |  | [optional] 
**runtime** | [**GuestRuntimeDetails**](GuestRuntimeDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_os_details import GuestOsDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GuestOsDetails from a JSON string
guest_os_details_instance = GuestOsDetails.from_json(json)
# print the JSON string representation of the object
print(GuestOsDetails.to_json())

# convert the object into a dict
guest_os_details_dict = guest_os_details_instance.to_dict()
# create an instance of GuestOsDetails from a dict
guest_os_details_from_dict = GuestOsDetails.from_dict(guest_os_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


