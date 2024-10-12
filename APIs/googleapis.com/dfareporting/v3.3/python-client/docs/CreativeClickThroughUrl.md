# CreativeClickThroughUrl

Click-through URL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computed_click_through_url** | **str** | Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page&#39;s URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field.  | [optional] 
**custom_click_through_url** | **str** | Custom click-through URL. Applicable if the landingPageId field is left unset. | [optional] 
**landing_page_id** | **str** | ID of the landing page for the click-through URL. | [optional] 

## Example

```python
from openapi_client.models.creative_click_through_url import CreativeClickThroughUrl

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeClickThroughUrl from a JSON string
creative_click_through_url_instance = CreativeClickThroughUrl.from_json(json)
# print the JSON string representation of the object
print(CreativeClickThroughUrl.to_json())

# convert the object into a dict
creative_click_through_url_dict = creative_click_through_url_instance.to_dict()
# create an instance of CreativeClickThroughUrl from a dict
creative_click_through_url_from_dict = CreativeClickThroughUrl.from_dict(creative_click_through_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


