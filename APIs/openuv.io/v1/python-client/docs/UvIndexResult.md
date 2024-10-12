# UvIndexResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_time** | **str** |  | 
**from_uv** | **float** |  | 
**to_time** | **str** |  | 
**to_uv** | **float** |  | 

## Example

```python
from openapi_client.models.uv_index_result import UvIndexResult

# TODO update the JSON string below
json = "{}"
# create an instance of UvIndexResult from a JSON string
uv_index_result_instance = UvIndexResult.from_json(json)
# print the JSON string representation of the object
print(UvIndexResult.to_json())

# convert the object into a dict
uv_index_result_dict = uv_index_result_instance.to_dict()
# create an instance of UvIndexResult from a dict
uv_index_result_from_dict = UvIndexResult.from_dict(uv_index_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


