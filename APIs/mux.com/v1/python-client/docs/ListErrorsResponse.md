# ListErrorsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Error]**](Error.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_errors_response import ListErrorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListErrorsResponse from a JSON string
list_errors_response_instance = ListErrorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListErrorsResponse.to_json())

# convert the object into a dict
list_errors_response_dict = list_errors_response_instance.to_dict()
# create an instance of ListErrorsResponse from a dict
list_errors_response_from_dict = ListErrorsResponse.from_dict(list_errors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


