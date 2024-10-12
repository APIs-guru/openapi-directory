# PretargetingConfigExcludedPlacementsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement. | [optional] 
**type** | **str** | The type of the placement. | [optional] 

## Example

```python
from openapi_client.models.pretargeting_config_excluded_placements_inner import PretargetingConfigExcludedPlacementsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PretargetingConfigExcludedPlacementsInner from a JSON string
pretargeting_config_excluded_placements_inner_instance = PretargetingConfigExcludedPlacementsInner.from_json(json)
# print the JSON string representation of the object
print(PretargetingConfigExcludedPlacementsInner.to_json())

# convert the object into a dict
pretargeting_config_excluded_placements_inner_dict = pretargeting_config_excluded_placements_inner_instance.to_dict()
# create an instance of PretargetingConfigExcludedPlacementsInner from a dict
pretargeting_config_excluded_placements_inner_from_dict = PretargetingConfigExcludedPlacementsInner.from_dict(pretargeting_config_excluded_placements_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


