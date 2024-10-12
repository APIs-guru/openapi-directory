# CommonInStreamAttribute

Common attributes for in-stream, non-skippable and bumper ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_button_label** | **str** | The text on the call-to-action button. | [optional] 
**action_headline** | **str** | The headline of the call-to-action banner. | [optional] 
**companion_banner** | [**ImageAsset**](ImageAsset.md) |  | [optional] 
**display_url** | **str** | The webpage address that appears with the ad. | [optional] 
**final_url** | **str** | The URL address of the webpage that people reach after they click the ad. | [optional] 
**tracking_url** | **str** | The URL address loaded in the background for tracking purposes. | [optional] 
**video** | [**YoutubeVideoDetails**](YoutubeVideoDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.common_in_stream_attribute import CommonInStreamAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of CommonInStreamAttribute from a JSON string
common_in_stream_attribute_instance = CommonInStreamAttribute.from_json(json)
# print the JSON string representation of the object
print(CommonInStreamAttribute.to_json())

# convert the object into a dict
common_in_stream_attribute_dict = common_in_stream_attribute_instance.to_dict()
# create an instance of CommonInStreamAttribute from a dict
common_in_stream_attribute_from_dict = CommonInStreamAttribute.from_dict(common_in_stream_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


