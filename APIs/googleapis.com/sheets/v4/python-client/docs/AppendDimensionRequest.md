# AppendDimensionRequest

Appends rows or columns to the end of a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | Whether rows or columns should be appended. | [optional] 
**length** | **int** | The number of rows or columns to append. | [optional] 
**sheet_id** | **int** | The sheet to append rows or columns to. | [optional] 

## Example

```python
from openapi_client.models.append_dimension_request import AppendDimensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppendDimensionRequest from a JSON string
append_dimension_request_instance = AppendDimensionRequest.from_json(json)
# print the JSON string representation of the object
print(AppendDimensionRequest.to_json())

# convert the object into a dict
append_dimension_request_dict = append_dimension_request_instance.to_dict()
# create an instance of AppendDimensionRequest from a dict
append_dimension_request_from_dict = AppendDimensionRequest.from_dict(append_dimension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


