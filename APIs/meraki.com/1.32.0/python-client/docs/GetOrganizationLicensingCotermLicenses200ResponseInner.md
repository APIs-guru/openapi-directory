# GetOrganizationLicensingCotermLicenses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claimed_at** | **datetime** | When the license was claimed into the organization | [optional] 
**counts** | [**List[GetOrganizationLicensingCotermLicenses200ResponseInnerCountsInner]**](GetOrganizationLicensingCotermLicenses200ResponseInnerCountsInner.md) | The counts of the license by model type | [optional] 
**duration** | **int** | The duration (term length) of the license, measured in days | [optional] 
**editions** | [**List[GetOrganizationLicensingCotermLicenses200ResponseInnerEditionsInner]**](GetOrganizationLicensingCotermLicenses200ResponseInnerEditionsInner.md) | The editions of the license for each relevant product type | [optional] 
**expired** | **bool** | Flag to indicate if the license is expired | [optional] 
**invalidated** | **bool** | Flag to indicated that the license is invalidated | [optional] 
**invalidated_at** | **datetime** | When the license was invalidated. Will be null for active licenses | [optional] 
**key** | **str** | The key of the license | [optional] 
**mode** | **str** | The operation mode of the license when it was claimed | [optional] 
**organization_id** | **str** | The ID of the organization that the license is claimed in | [optional] 
**started_at** | **datetime** | When the license&#39;s term began (approximately the date when the license was created) | [optional] 

## Example

```python
from openapi_client.models.get_organization_licensing_coterm_licenses200_response_inner import GetOrganizationLicensingCotermLicenses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationLicensingCotermLicenses200ResponseInner from a JSON string
get_organization_licensing_coterm_licenses200_response_inner_instance = GetOrganizationLicensingCotermLicenses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationLicensingCotermLicenses200ResponseInner.to_json())

# convert the object into a dict
get_organization_licensing_coterm_licenses200_response_inner_dict = get_organization_licensing_coterm_licenses200_response_inner_instance.to_dict()
# create an instance of GetOrganizationLicensingCotermLicenses200ResponseInner from a dict
get_organization_licensing_coterm_licenses200_response_inner_from_dict = GetOrganizationLicensingCotermLicenses200ResponseInner.from_dict(get_organization_licensing_coterm_licenses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


