# ListDimensionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListDimensionsResponseData**](ListDimensionsResponseData.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_dimensions_response import ListDimensionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDimensionsResponse from a JSON string
list_dimensions_response_instance = ListDimensionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDimensionsResponse.to_json())

# convert the object into a dict
list_dimensions_response_dict = list_dimensions_response_instance.to_dict()
# create an instance of ListDimensionsResponse from a dict
list_dimensions_response_from_dict = ListDimensionsResponse.from_dict(list_dimensions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


