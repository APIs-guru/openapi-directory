# TargetingInfo

Targeting information about the generated apks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_slice_set** | [**List[AssetSliceSet]**](AssetSliceSet.md) | List of created asset slices. | [optional] 
**package_name** | **str** | The package name of this app. | [optional] 
**variant** | [**List[SplitApkVariant]**](SplitApkVariant.md) | List of the created variants. | [optional] 

## Example

```python
from openapi_client.models.targeting_info import TargetingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingInfo from a JSON string
targeting_info_instance = TargetingInfo.from_json(json)
# print the JSON string representation of the object
print(TargetingInfo.to_json())

# convert the object into a dict
targeting_info_dict = targeting_info_instance.to_dict()
# create an instance of TargetingInfo from a dict
targeting_info_from_dict = TargetingInfo.from_dict(targeting_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


