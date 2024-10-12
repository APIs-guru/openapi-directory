# NonSdkApiInsight

Non-SDK API insights (to address debugging solutions).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_trace_messages** | **List[str]** | Optional sample stack traces, for which this insight applies (there should be at least one). | [optional] 
**matcher_id** | **str** | A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required) | [optional] 
**pending_google_update_insight** | [**PendingGoogleUpdateInsight**](PendingGoogleUpdateInsight.md) |  | [optional] 
**upgrade_insight** | [**UpgradeInsight**](UpgradeInsight.md) |  | [optional] 

## Example

```python
from openapi_client.models.non_sdk_api_insight import NonSdkApiInsight

# TODO update the JSON string below
json = "{}"
# create an instance of NonSdkApiInsight from a JSON string
non_sdk_api_insight_instance = NonSdkApiInsight.from_json(json)
# print the JSON string representation of the object
print(NonSdkApiInsight.to_json())

# convert the object into a dict
non_sdk_api_insight_dict = non_sdk_api_insight_instance.to_dict()
# create an instance of NonSdkApiInsight from a dict
non_sdk_api_insight_from_dict = NonSdkApiInsight.from_dict(non_sdk_api_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


