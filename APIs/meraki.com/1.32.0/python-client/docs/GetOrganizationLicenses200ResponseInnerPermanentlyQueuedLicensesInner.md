# GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_in_days** | **int** | The duration of the individual license | [optional] 
**id** | **str** | Permanently queued license ID | [optional] 
**license_key** | **str** | License key | [optional] 
**license_type** | **str** | License type | [optional] 
**order_number** | **str** | Order number | [optional] 

## Example

```python
from openapi_client.models.get_organization_licenses200_response_inner_permanently_queued_licenses_inner import GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner from a JSON string
get_organization_licenses200_response_inner_permanently_queued_licenses_inner_instance = GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner.to_json())

# convert the object into a dict
get_organization_licenses200_response_inner_permanently_queued_licenses_inner_dict = get_organization_licenses200_response_inner_permanently_queued_licenses_inner_instance.to_dict()
# create an instance of GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner from a dict
get_organization_licenses200_response_inner_permanently_queued_licenses_inner_from_dict = GetOrganizationLicenses200ResponseInnerPermanentlyQueuedLicensesInner.from_dict(get_organization_licenses200_response_inner_permanently_queued_licenses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


