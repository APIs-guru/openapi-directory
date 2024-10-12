# DeleteDimensionRequest

Deletes the dimensions from the sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_dimension_request import DeleteDimensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDimensionRequest from a JSON string
delete_dimension_request_instance = DeleteDimensionRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteDimensionRequest.to_json())

# convert the object into a dict
delete_dimension_request_dict = delete_dimension_request_instance.to_dict()
# create an instance of DeleteDimensionRequest from a dict
delete_dimension_request_from_dict = DeleteDimensionRequest.from_dict(delete_dimension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


