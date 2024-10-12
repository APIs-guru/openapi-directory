# SiteCloneability

Represents whether or not a web app is cloneable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocking_characteristics** | [**List[SiteCloneabilityCriterion]**](SiteCloneabilityCriterion.md) | List of blocking application characteristics | [optional] 
**blocking_features** | [**List[SiteCloneabilityCriterion]**](SiteCloneabilityCriterion.md) | List of features enabled on web app that prevent cloning | [optional] 
**result** | **str** | Name of web app | 
**unsupported_features** | [**List[SiteCloneabilityCriterion]**](SiteCloneabilityCriterion.md) | List of features enabled on web app that are non-blocking but cannot be cloned. The web app can still be cloned              but the features in this list will not be set up on cloned web app. | [optional] 

## Example

```python
from openapi_client.models.site_cloneability import SiteCloneability

# TODO update the JSON string below
json = "{}"
# create an instance of SiteCloneability from a JSON string
site_cloneability_instance = SiteCloneability.from_json(json)
# print the JSON string representation of the object
print(SiteCloneability.to_json())

# convert the object into a dict
site_cloneability_dict = site_cloneability_instance.to_dict()
# create an instance of SiteCloneability from a dict
site_cloneability_from_dict = SiteCloneability.from_dict(site_cloneability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


