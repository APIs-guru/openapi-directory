# GoogleCloudRetailV2CompletionDetail

Detailed completion information including completion attribution token and clicked completion info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_attribution_token** | **str** | Completion attribution token in CompleteQueryResponse.attribution_token. | [optional] 
**selected_position** | **int** | End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0. | [optional] 
**selected_suggestion** | **str** | End user selected CompleteQueryResponse.CompletionResult.suggestion. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_completion_detail import GoogleCloudRetailV2CompletionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2CompletionDetail from a JSON string
google_cloud_retail_v2_completion_detail_instance = GoogleCloudRetailV2CompletionDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2CompletionDetail.to_json())

# convert the object into a dict
google_cloud_retail_v2_completion_detail_dict = google_cloud_retail_v2_completion_detail_instance.to_dict()
# create an instance of GoogleCloudRetailV2CompletionDetail from a dict
google_cloud_retail_v2_completion_detail_from_dict = GoogleCloudRetailV2CompletionDetail.from_dict(google_cloud_retail_v2_completion_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


