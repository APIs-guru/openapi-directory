# Site

Contains properties of a site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this site. This is a read-only field that can be left blank. | [optional] 
**approved** | **bool** | Whether this site is approved. | [optional] 
**directory_site_id** | **str** | Directory site associated with this site. This is a required field that is read-only after insertion. | [optional] 
**directory_site_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**id** | **str** | ID of this site. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**key_name** | **str** | Key name of this site. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#site\&quot;. | [optional] 
**name** | **str** | Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account. | [optional] 
**site_contacts** | [**List[SiteContact]**](SiteContact.md) | Site contacts. | [optional] 
**site_settings** | [**SiteSettings**](SiteSettings.md) |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of this site. This is a read-only field that can be left blank. | [optional] 
**video_settings** | [**SiteVideoSettings**](SiteVideoSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.site import Site

# TODO update the JSON string below
json = "{}"
# create an instance of Site from a JSON string
site_instance = Site.from_json(json)
# print the JSON string representation of the object
print(Site.to_json())

# convert the object into a dict
site_dict = site_instance.to_dict()
# create an instance of Site from a dict
site_from_dict = Site.from_dict(site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


