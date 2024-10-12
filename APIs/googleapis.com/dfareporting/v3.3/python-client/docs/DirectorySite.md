# DirectorySite

DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether this directory site is active. | [optional] 
**id** | **str** | ID of this directory site. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**inpage_tag_formats** | **List[str]** | Tag types for regular placements. Acceptable values are: - \&quot;STANDARD\&quot; - \&quot;IFRAME_JAVASCRIPT_INPAGE\&quot; - \&quot;INTERNAL_REDIRECT_INPAGE\&quot; - \&quot;JAVASCRIPT_INPAGE\&quot;  | [optional] 
**interstitial_tag_formats** | **List[str]** | Tag types for interstitial placements. Acceptable values are: - \&quot;IFRAME_JAVASCRIPT_INTERSTITIAL\&quot; - \&quot;INTERNAL_REDIRECT_INTERSTITIAL\&quot; - \&quot;JAVASCRIPT_INTERSTITIAL\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#directorySite\&quot;. | [optional] 
**name** | **str** | Name of this directory site. | [optional] 
**settings** | [**DirectorySiteSettings**](DirectorySiteSettings.md) |  | [optional] 
**url** | **str** | URL of this directory site. | [optional] 

## Example

```python
from openapi_client.models.directory_site import DirectorySite

# TODO update the JSON string below
json = "{}"
# create an instance of DirectorySite from a JSON string
directory_site_instance = DirectorySite.from_json(json)
# print the JSON string representation of the object
print(DirectorySite.to_json())

# convert the object into a dict
directory_site_dict = directory_site_instance.to_dict()
# create an instance of DirectorySite from a dict
directory_site_from_dict = DirectorySite.from_dict(directory_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


