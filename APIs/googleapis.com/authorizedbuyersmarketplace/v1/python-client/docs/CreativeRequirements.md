# CreativeRequirements

Message captures data about the creatives in the deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_format** | **str** | Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals. | [optional] [readonly] 
**creative_pre_approval_policy** | **str** | Output only. Specifies the creative pre-approval policy. | [optional] [readonly] 
**creative_safe_frame_compatibility** | **str** | Output only. Specifies whether the creative is safeFrame compatible. | [optional] [readonly] 
**max_ad_duration_ms** | **str** | Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives. | [optional] [readonly] 
**programmatic_creative_source** | **str** | Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer. | [optional] [readonly] 
**skippable_ad_type** | **str** | Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives. | [optional] [readonly] 

## Example

```python
from openapi_client.models.creative_requirements import CreativeRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeRequirements from a JSON string
creative_requirements_instance = CreativeRequirements.from_json(json)
# print the JSON string representation of the object
print(CreativeRequirements.to_json())

# convert the object into a dict
creative_requirements_dict = creative_requirements_instance.to_dict()
# create an instance of CreativeRequirements from a dict
creative_requirements_from_dict = CreativeRequirements.from_dict(creative_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


