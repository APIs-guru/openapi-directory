# SkippableSetting

Skippable Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#skippableSetting\&quot;. | [optional] 
**progress_offset** | [**VideoOffset**](VideoOffset.md) |  | [optional] 
**skip_offset** | [**VideoOffset**](VideoOffset.md) |  | [optional] 
**skippable** | **bool** | Whether the user can skip creatives served to this placement. | [optional] 

## Example

```python
from openapi_client.models.skippable_setting import SkippableSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SkippableSetting from a JSON string
skippable_setting_instance = SkippableSetting.from_json(json)
# print the JSON string representation of the object
print(SkippableSetting.to_json())

# convert the object into a dict
skippable_setting_dict = skippable_setting_instance.to_dict()
# create an instance of SkippableSetting from a dict
skippable_setting_from_dict = SkippableSetting.from_dict(skippable_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


