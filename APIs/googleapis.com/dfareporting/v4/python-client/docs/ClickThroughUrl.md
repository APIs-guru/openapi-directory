# ClickThroughUrl

Click-through URL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computed_click_through_url** | **str** | Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign&#39;s default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page&#39;s URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field.  | [optional] 
**custom_click_through_url** | **str** | Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset. | [optional] 
**default_landing_page** | **bool** | Whether the campaign default landing page is used. | [optional] 
**landing_page_id** | **str** | ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false. | [optional] 

## Example

```python
from openapi_client.models.click_through_url import ClickThroughUrl

# TODO update the JSON string below
json = "{}"
# create an instance of ClickThroughUrl from a JSON string
click_through_url_instance = ClickThroughUrl.from_json(json)
# print the JSON string representation of the object
print(ClickThroughUrl.to_json())

# convert the object into a dict
click_through_url_dict = click_through_url_instance.to_dict()
# create an instance of ClickThroughUrl from a dict
click_through_url_from_dict = ClickThroughUrl.from_dict(click_through_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


