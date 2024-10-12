# AnalyticsCrashGroupModelCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** |  | [optional] 
**models** | [**List[AnalyticsCrashGroupModelCounts200ResponseModelsInner]**](AnalyticsCrashGroupModelCounts200ResponseModelsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.analytics_crash_group_model_counts200_response import AnalyticsCrashGroupModelCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsCrashGroupModelCounts200Response from a JSON string
analytics_crash_group_model_counts200_response_instance = AnalyticsCrashGroupModelCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsCrashGroupModelCounts200Response.to_json())

# convert the object into a dict
analytics_crash_group_model_counts200_response_dict = analytics_crash_group_model_counts200_response_instance.to_dict()
# create an instance of AnalyticsCrashGroupModelCounts200Response from a dict
analytics_crash_group_model_counts200_response_from_dict = AnalyticsCrashGroupModelCounts200Response.from_dict(analytics_crash_group_model_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


