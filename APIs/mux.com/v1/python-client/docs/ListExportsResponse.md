# ListExportsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_exports_response import ListExportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListExportsResponse from a JSON string
list_exports_response_instance = ListExportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListExportsResponse.to_json())

# convert the object into a dict
list_exports_response_dict = list_exports_response_instance.to_dict()
# create an instance of ListExportsResponse from a dict
list_exports_response_from_dict = ListExportsResponse.from_dict(list_exports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


