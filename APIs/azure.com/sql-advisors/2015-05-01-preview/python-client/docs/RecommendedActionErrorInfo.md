# RecommendedActionErrorInfo

Contains error information for an Azure SQL Database, Server or Elastic Pool Recommended Action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Gets the reason why the recommended action was put to error state. e.g., DatabaseHasQdsOff, IndexAlreadyExists | [optional] [readonly] 
**is_retryable** | **str** | Gets whether the error could be ignored and recommended action could be retried. Possible values are: Yes/No | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommended_action_error_info import RecommendedActionErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendedActionErrorInfo from a JSON string
recommended_action_error_info_instance = RecommendedActionErrorInfo.from_json(json)
# print the JSON string representation of the object
print(RecommendedActionErrorInfo.to_json())

# convert the object into a dict
recommended_action_error_info_dict = recommended_action_error_info_instance.to_dict()
# create an instance of RecommendedActionErrorInfo from a dict
recommended_action_error_info_from_dict = RecommendedActionErrorInfo.from_dict(recommended_action_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


