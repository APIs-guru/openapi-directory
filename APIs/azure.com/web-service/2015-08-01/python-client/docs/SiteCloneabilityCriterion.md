# SiteCloneabilityCriterion

Represents a site cloneability criterion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of criterion | [optional] 
**name** | **str** | Name of criterion | [optional] 

## Example

```python
from openapi_client.models.site_cloneability_criterion import SiteCloneabilityCriterion

# TODO update the JSON string below
json = "{}"
# create an instance of SiteCloneabilityCriterion from a JSON string
site_cloneability_criterion_instance = SiteCloneabilityCriterion.from_json(json)
# print the JSON string representation of the object
print(SiteCloneabilityCriterion.to_json())

# convert the object into a dict
site_cloneability_criterion_dict = site_cloneability_criterion_instance.to_dict()
# create an instance of SiteCloneabilityCriterion from a dict
site_cloneability_criterion_from_dict = SiteCloneabilityCriterion.from_dict(site_cloneability_criterion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


