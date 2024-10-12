# ListFiltersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListDimensionsResponseData**](ListDimensionsResponseData.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_filters_response import ListFiltersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFiltersResponse from a JSON string
list_filters_response_instance = ListFiltersResponse.from_json(json)
# print the JSON string representation of the object
print(ListFiltersResponse.to_json())

# convert the object into a dict
list_filters_response_dict = list_filters_response_instance.to_dict()
# create an instance of ListFiltersResponse from a dict
list_filters_response_from_dict = ListFiltersResponse.from_dict(list_filters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


