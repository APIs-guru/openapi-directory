# CrashGroupModels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** |  | [optional] 
**models** | [**List[AnalyticsCrashGroupModelCounts200ResponseModelsInner]**](AnalyticsCrashGroupModelCounts200ResponseModelsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.crash_group_models import CrashGroupModels

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupModels from a JSON string
crash_group_models_instance = CrashGroupModels.from_json(json)
# print the JSON string representation of the object
print(CrashGroupModels.to_json())

# convert the object into a dict
crash_group_models_dict = crash_group_models_instance.to_dict()
# create an instance of CrashGroupModels from a dict
crash_group_models_from_dict = CrashGroupModels.from_dict(crash_group_models_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


