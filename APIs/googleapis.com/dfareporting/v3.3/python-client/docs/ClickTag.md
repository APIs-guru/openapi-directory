# ClickTag

Creative Click Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_through_url** | [**CreativeClickThroughUrl**](CreativeClickThroughUrl.md) |  | [optional] 
**event_name** | **str** | Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. | [optional] 
**name** | **str** | Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset&#39;s creativeAssetId.name field. | [optional] 

## Example

```python
from openapi_client.models.click_tag import ClickTag

# TODO update the JSON string below
json = "{}"
# create an instance of ClickTag from a JSON string
click_tag_instance = ClickTag.from_json(json)
# print the JSON string representation of the object
print(ClickTag.to_json())

# convert the object into a dict
click_tag_dict = click_tag_instance.to_dict()
# create an instance of ClickTag from a dict
click_tag_from_dict = ClickTag.from_dict(click_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


