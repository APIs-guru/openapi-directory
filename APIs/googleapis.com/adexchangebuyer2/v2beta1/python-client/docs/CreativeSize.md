# CreativeSize

Specifies the size of the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_formats** | **List[str]** | What formats are allowed by the publisher. If this repeated field is empty then all formats are allowed. For example, if this field contains AllowedFormatType.AUDIO then the publisher only allows an audio ad (without any video). | [optional] 
**companion_sizes** | [**List[Size]**](Size.md) | For video creatives specifies the sizes of companion ads (if present). Companion sizes may be filled in only when creative_size_type &#x3D; VIDEO | [optional] 
**creative_size_type** | **str** | The creative size type. | [optional] 
**native_template** | **str** | Output only. The native template for this creative. It will have a value only if creative_size_type &#x3D; CreativeSizeType.NATIVE. | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**skippable_ad_type** | **str** | The type of skippable ad for this creative. It will have a value only if creative_size_type &#x3D; CreativeSizeType.VIDEO. | [optional] 

## Example

```python
from openapi_client.models.creative_size import CreativeSize

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeSize from a JSON string
creative_size_instance = CreativeSize.from_json(json)
# print the JSON string representation of the object
print(CreativeSize.to_json())

# convert the object into a dict
creative_size_dict = creative_size_instance.to_dict()
# create an instance of CreativeSize from a dict
creative_size_from_dict = CreativeSize.from_dict(creative_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


