# GetOrganizationLicenses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_date** | **str** | The date the license started burning | [optional] 
**claim_date** | **str** | The date the license was claimed into the organization | [optional] 
**device_serial** | **str** | Serial number of the device the license is assigned to | [optional] 
**duration_in_days** | **int** | The duration of the individual license | [optional] 
**expiration_date** | **str** | The date the license will expire | [optional] 
**head_license_id** | **str** | The id of the head license this license is queued behind. If there is no head license, it returns nil. | [optional] 
**id** | **str** | License ID | [optional] 
**license_key** | **str** | License key | [optional] 
**license_type** | **str** | License type | [optional] 
**network_id** | **str** | ID of the network the license is assigned to | [optional] 
**order_number** | **str** | Order number | [optional] 
**permanently_queued_licenses** | [**List[GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner]**](GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner.md) | DEPRECATED List of permanently queued licenses attached to the license. Instead, use /organizations/{organizationId}/licenses?deviceSerial&#x3D; to retrieved queued licenses for a given device. | [optional] 
**seat_count** | **int** | The number of seats of the license. Only applicable to SM licenses. | [optional] 
**state** | **str** | The state of the license. All queued licenses have a status of &#x60;recentlyQueued&#x60;. | [optional] 
**total_duration_in_days** | **int** | The duration of the license plus all permanently queued licenses associated with it | [optional] 

## Example

```python
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLicenses200ResponseInner from a JSON string
get_organization_licenses200_response_inner_instance = GetOrganizationLicenses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLicenses200ResponseInner.to_json())

# convert the object into a dict
get_organization_licenses200_response_inner_dict = get_organization_licenses200_response_inner_instance.to_dict()
# create an instance of GetOrganizationLicenses200ResponseInner from a dict
get_organization_licenses200_response_inner_from_dict = GetOrganizationLicenses200ResponseInner.from_dict(get_organization_licenses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


