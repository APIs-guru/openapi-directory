# APIPagedResponseAPIModelsLog

A response containing a page of results and metadata concerning the results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[APIModelsLog]**](APIModelsLog.md) |  | [readonly] 
**metadata** | [**APIPagedResponseMetadata**](APIPagedResponseMetadata.md) |  | 

## Example

```python
from openapi_client.models.api_paged_response_api_models_log import APIPagedResponseAPIModelsLog

# TODO update the JSON string below
json = "{}"
# create an instance of APIPagedResponseAPIModelsLog from a JSON string
api_paged_response_api_models_log_instance = APIPagedResponseAPIModelsLog.from_json(json)
# print the JSON string representation of the object
print(APIPagedResponseAPIModelsLog.to_json())

# convert the object into a dict
api_paged_response_api_models_log_dict = api_paged_response_api_models_log_instance.to_dict()
# create an instance of APIPagedResponseAPIModelsLog from a dict
api_paged_response_api_models_log_from_dict = APIPagedResponseAPIModelsLog.from_dict(api_paged_response_api_models_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


