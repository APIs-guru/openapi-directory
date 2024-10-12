# NativeContent

Native content for a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_name** | **str** | The name of the advertiser or sponsor, to be displayed in the ad creative. | [optional] 
**app_icon** | [**Image**](Image.md) |  | [optional] 
**body** | **str** | A long description of the ad. | [optional] 
**call_to_action** | **str** | A label for the button that the user is supposed to click. | [optional] 
**click_link_url** | **str** | The URL that the browser/SDK will load when the user clicks the ad. | [optional] 
**click_tracking_url** | **str** | The URL to use for click tracking. | [optional] 
**headline** | **str** | A short title for the ad. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**logo** | [**Image**](Image.md) |  | [optional] 
**price_display_text** | **str** | The price of the promoted app including currency info. | [optional] 
**star_rating** | **float** | The app rating in the app store. Must be in the range [0-5]. | [optional] 
**video_url** | **str** | The URL to fetch a native video ad. | [optional] 
**video_vast_xml** | **str** | The contents of a VAST document for a native video ad. | [optional] 

## Example

```python
from openapi_client.models.native_content import NativeContent

# TODO update the JSON string below
json = "{}"
# create an instance of NativeContent from a JSON string
native_content_instance = NativeContent.from_json(json)
# print the JSON string representation of the object
print(NativeContent.to_json())

# convert the object into a dict
native_content_dict = native_content_instance.to_dict()
# create an instance of NativeContent from a dict
native_content_from_dict = NativeContent.from_dict(native_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


