# ContentSummaryResult

Data Lake Store filesystem content summary information response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_summary** | [**ContentSummary**](ContentSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.content_summary_result import ContentSummaryResult

# TODO update the JSON string below
json = "{}"
# create an instance of ContentSummaryResult from a JSON string
content_summary_result_instance = ContentSummaryResult.from_json(json)
# print the JSON string representation of the object
print(ContentSummaryResult.to_json())

# convert the object into a dict
content_summary_result_dict = content_summary_result_instance.to_dict()
# create an instance of ContentSummaryResult from a dict
content_summary_result_from_dict = ContentSummaryResult.from_dict(content_summary_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


