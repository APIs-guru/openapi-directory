# AnalyticsModelCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[AnalyticsModelCounts200ResponseModelsInner]**](AnalyticsModelCounts200ResponseModelsInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.analytics_model_counts200_response import AnalyticsModelCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsModelCounts200Response from a JSON string
analytics_model_counts200_response_instance = AnalyticsModelCounts200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsModelCounts200Response.to_json())

# convert the object into a dict
analytics_model_counts200_response_dict = analytics_model_counts200_response_instance.to_dict()
# create an instance of AnalyticsModelCounts200Response from a dict
analytics_model_counts200_response_from_dict = AnalyticsModelCounts200Response.from_dict(analytics_model_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


