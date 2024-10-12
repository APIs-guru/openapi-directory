# DoubleVerifyVideoViewability

Details of DoubleVerify video viewability settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**player_impression_rate** | **str** | Target inventory to maximize impressions with 400x300 or greater player size. | [optional] 
**video_iab** | **str** | Target web inventory to maximize IAB viewable rate. | [optional] 
**video_viewable_rate** | **str** | Target web inventory to maximize fully viewable rate. | [optional] 

## Example

```python
from openapi_client.models.double_verify_video_viewability import DoubleVerifyVideoViewability

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleVerifyVideoViewability from a JSON string
double_verify_video_viewability_instance = DoubleVerifyVideoViewability.from_json(json)
# print the JSON string representation of the object
print(DoubleVerifyVideoViewability.to_json())

# convert the object into a dict
double_verify_video_viewability_dict = double_verify_video_viewability_instance.to_dict()
# create an instance of DoubleVerifyVideoViewability from a dict
double_verify_video_viewability_from_dict = DoubleVerifyVideoViewability.from_dict(double_verify_video_viewability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


