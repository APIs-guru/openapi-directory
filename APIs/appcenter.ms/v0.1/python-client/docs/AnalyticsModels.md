# AnalyticsModels


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[AnalyticsModelCounts200ResponseModelsInner]**](AnalyticsModelCounts200ResponseModelsInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_models import AnalyticsModels

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsModels from a JSON string
analytics_models_instance = AnalyticsModels.from_json(json)
# print the JSON string representation of the object
print(AnalyticsModels.to_json())

# convert the object into a dict
analytics_models_dict = analytics_models_instance.to_dict()
# create an instance of AnalyticsModels from a dict
analytics_models_from_dict = AnalyticsModels.from_dict(analytics_models_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


