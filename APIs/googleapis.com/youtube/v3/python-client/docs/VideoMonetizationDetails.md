# VideoMonetizationDetails

Details about monetization of a YouTube Video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**AccessPolicy**](AccessPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_monetization_details import VideoMonetizationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoMonetizationDetails from a JSON string
video_monetization_details_instance = VideoMonetizationDetails.from_json(json)
# print the JSON string representation of the object
print(VideoMonetizationDetails.to_json())

# convert the object into a dict
video_monetization_details_dict = video_monetization_details_instance.to_dict()
# create an instance of VideoMonetizationDetails from a dict
video_monetization_details_from_dict = VideoMonetizationDetails.from_dict(video_monetization_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


