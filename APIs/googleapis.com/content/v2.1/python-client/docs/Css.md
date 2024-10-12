# Css

Information about CSS domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css_domain_id** | **str** | Output only. Immutable. The CSS domain ID. | [optional] [readonly] 
**css_group_id** | **str** | Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users. | [optional] [readonly] 
**display_name** | **str** | Output only. Immutable. The CSS domain&#39;s display name, used when space is constrained. | [optional] [readonly] 
**full_name** | **str** | Output only. Immutable. The CSS domain&#39;s full name. | [optional] [readonly] 
**homepage_uri** | **str** | Output only. Immutable. The CSS domain&#39;s homepage. | [optional] [readonly] 
**label_ids** | **List[str]** | A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users. | [optional] 

## Example

```python
from openapi_client.models.css import Css

# TODO update the JSON string below
json = "{}"
# create an instance of Css from a JSON string
css_instance = Css.from_json(json)
# print the JSON string representation of the object
print(Css.to_json())

# convert the object into a dict
css_dict = css_instance.to_dict()
# create an instance of Css from a dict
css_from_dict = Css.from_dict(css_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


