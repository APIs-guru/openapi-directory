# TargetingValueCreativeSize

Next Id: 7

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_formats** | **List[str]** | The formats allowed by the publisher. | [optional] 
**companion_sizes** | [**List[TargetingValueSize]**](TargetingValueSize.md) | For video size type, the list of companion sizes. | [optional] 
**creative_size_type** | **str** | The Creative size type. | [optional] 
**native_template** | **str** | The native template for native ad. | [optional] 
**size** | [**TargetingValueSize**](TargetingValueSize.md) |  | [optional] 
**skippable_ad_type** | **str** | The skippable ad type for video size. | [optional] 

## Example

```python
from openapi_client.models.targeting_value_creative_size import TargetingValueCreativeSize

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingValueCreativeSize from a JSON string
targeting_value_creative_size_instance = TargetingValueCreativeSize.from_json(json)
# print the JSON string representation of the object
print(TargetingValueCreativeSize.to_json())

# convert the object into a dict
targeting_value_creative_size_dict = targeting_value_creative_size_instance.to_dict()
# create an instance of TargetingValueCreativeSize from a dict
targeting_value_creative_size_from_dict = TargetingValueCreativeSize.from_dict(targeting_value_creative_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


