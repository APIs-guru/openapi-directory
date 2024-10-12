# AdStyle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colors** | [**AdStyleColors**](AdStyleColors.md) |  | [optional] 
**corners** | **str** | The style of the corners in the ad (deprecated: never populated, ignored). | [optional] 
**font** | [**AdStyleFont**](AdStyleFont.md) |  | [optional] 
**kind** | **str** | Kind this is, in this case adsensehost#adStyle. | [optional] [default to 'adsensehost#adStyle']

## Example

```python
from openapi_client.models.ad_style import AdStyle

# TODO update the JSON string below
json = "{}"
# create an instance of AdStyle from a JSON string
ad_style_instance = AdStyle.from_json(json)
# print the JSON string representation of the object
print(AdStyle.to_json())

# convert the object into a dict
ad_style_dict = ad_style_instance.to_dict()
# create an instance of AdStyle from a dict
ad_style_from_dict = AdStyle.from_dict(ad_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


