# TargetingExpansionConfig

Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience_expansion_level** | **str** | Output only. Magnitude of expansion for eligible first-party user lists under this ad group. This field only applies to YouTube and Partners line item and ad group resources. | [optional] [readonly] 
**audience_expansion_seed_list_excluded** | **bool** | Output only. Whether to exclude seed list for audience expansion. This field only applies to YouTube and Partners line item and ad group resources. | [optional] [readonly] 
**enable_optimized_targeting** | **bool** | Required. Whether to enable Optimized Targeting for the line item. | [optional] 

## Example

```python
from openapi_client.models.targeting_expansion_config import TargetingExpansionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingExpansionConfig from a JSON string
targeting_expansion_config_instance = TargetingExpansionConfig.from_json(json)
# print the JSON string representation of the object
print(TargetingExpansionConfig.to_json())

# convert the object into a dict
targeting_expansion_config_dict = targeting_expansion_config_instance.to_dict()
# create an instance of TargetingExpansionConfig from a dict
targeting_expansion_config_from_dict = TargetingExpansionConfig.from_dict(targeting_expansion_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


