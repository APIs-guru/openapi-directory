# ClickThroughUrlSuffixProperties

Click Through URL Suffix settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_through_url_suffix** | **str** | Click-through URL suffix to apply to all ads in this entity&#39;s scope. Must be less than 128 characters long. | [optional] 
**override_inherited_suffix** | **bool** | Whether this entity should override the inherited click-through URL suffix with its own defined value. | [optional] 

## Example

```python
from openapi_client.models.click_through_url_suffix_properties import ClickThroughUrlSuffixProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ClickThroughUrlSuffixProperties from a JSON string
click_through_url_suffix_properties_instance = ClickThroughUrlSuffixProperties.from_json(json)
# print the JSON string representation of the object
print(ClickThroughUrlSuffixProperties.to_json())

# convert the object into a dict
click_through_url_suffix_properties_dict = click_through_url_suffix_properties_instance.to_dict()
# create an instance of ClickThroughUrlSuffixProperties from a dict
click_through_url_suffix_properties_from_dict = ClickThroughUrlSuffixProperties.from_dict(click_through_url_suffix_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


