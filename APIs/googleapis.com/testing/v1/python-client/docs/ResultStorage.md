# ResultStorage

Locations where the results of running the test are stored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_cloud_storage** | [**GoogleCloudStorage**](GoogleCloudStorage.md) |  | [optional] 
**results_url** | **str** | Output only. URL to the results in the Firebase Web Console. | [optional] 
**tool_results_execution** | [**ToolResultsExecution**](ToolResultsExecution.md) |  | [optional] 
**tool_results_history** | [**ToolResultsHistory**](ToolResultsHistory.md) |  | [optional] 

## Example

```python
from openapi_client.models.result_storage import ResultStorage

# TODO update the JSON string below
json = "{}"
# create an instance of ResultStorage from a JSON string
result_storage_instance = ResultStorage.from_json(json)
# print the JSON string representation of the object
print(ResultStorage.to_json())

# convert the object into a dict
result_storage_dict = result_storage_instance.to_dict()
# create an instance of ResultStorage from a dict
result_storage_from_dict = ResultStorage.from_dict(result_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


