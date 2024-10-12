# AdBreak

Ad break.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time_offset** | **str** | Start time in seconds for the ad break, relative to the output file timeline. The default is &#x60;0s&#x60;. | [optional] 

## Example

```python
from openapi_client.models.ad_break import AdBreak

# TODO update the JSON string below
json = "{}"
# create an instance of AdBreak from a JSON string
ad_break_instance = AdBreak.from_json(json)
# print the JSON string representation of the object
print(AdBreak.to_json())

# convert the object into a dict
ad_break_dict = ad_break_instance.to_dict()
# create an instance of AdBreak from a dict
ad_break_from_dict = AdBreak.from_dict(ad_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


