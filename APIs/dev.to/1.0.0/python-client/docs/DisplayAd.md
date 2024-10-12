# DisplayAd

A Display Ad, aka Billboard, aka Widget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Ad must be both published and approved to be in rotation | [optional] 
**article_exclude_ids** | **str** | Articles this ad should *not* appear on (blank means no articles are disallowed, and this ad can appear next to any/all articles). Comma-separated list of integer Article IDs | [optional] 
**body_markdown** | **str** | The text (in markdown) of the ad (required) | 
**creator_id** | **int** | Identifies the user who created the ad. | [optional] 
**display_to** | **str** | Potentially limits visitors to whom the ad is visible | [optional] [default to 'all']
**id** | **int** | The ID of the Display Ad | [optional] 
**name** | **str** | For internal use, helps distinguish ads from one another | 
**organization_id** | **int** | Identifies the organization to which the ad belongs | [optional] 
**placement_area** | **str** | Identifies which area of site layout the ad can appear in | 
**published** | **bool** | Ad must be both published and approved to be in rotation | [optional] 
**tag_list** | **str** | Tags on which this ad can be displayed (blank is all/any tags) | [optional] 
**type_of** | **str** | Types of the billboards: in_house (created by admins), community (created by an entity, appears on entity&#39;s content), external ( created by an entity, or a non-entity, can appear everywhere)  | [optional] [default to 'in_house']

## Example

```python
from openapi_client.models.display_ad import DisplayAd

# TODO update the JSON string below
json = "{}"
# create an instance of DisplayAd from a JSON string
display_ad_instance = DisplayAd.from_json(json)
# print the JSON string representation of the object
print(DisplayAd.to_json())

# convert the object into a dict
display_ad_dict = display_ad_instance.to_dict()
# create an instance of DisplayAd from a dict
display_ad_from_dict = DisplayAd.from_dict(display_ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


