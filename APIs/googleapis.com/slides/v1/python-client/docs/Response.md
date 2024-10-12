# Response

A single response from an update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_image** | [**CreateImageResponse**](CreateImageResponse.md) |  | [optional] 
**create_line** | [**CreateLineResponse**](CreateLineResponse.md) |  | [optional] 
**create_shape** | [**CreateShapeResponse**](CreateShapeResponse.md) |  | [optional] 
**create_sheets_chart** | [**CreateSheetsChartResponse**](CreateSheetsChartResponse.md) |  | [optional] 
**create_slide** | [**CreateSlideResponse**](CreateSlideResponse.md) |  | [optional] 
**create_table** | [**CreateTableResponse**](CreateTableResponse.md) |  | [optional] 
**create_video** | [**CreateVideoResponse**](CreateVideoResponse.md) |  | [optional] 
**duplicate_object** | [**DuplicateObjectResponse**](DuplicateObjectResponse.md) |  | [optional] 
**group_objects** | [**GroupObjectsResponse**](GroupObjectsResponse.md) |  | [optional] 
**replace_all_shapes_with_image** | [**ReplaceAllShapesWithImageResponse**](ReplaceAllShapesWithImageResponse.md) |  | [optional] 
**replace_all_shapes_with_sheets_chart** | [**ReplaceAllShapesWithSheetsChartResponse**](ReplaceAllShapesWithSheetsChartResponse.md) |  | [optional] 
**replace_all_text** | [**ReplaceAllTextResponse**](ReplaceAllTextResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.response import Response

# TODO update the JSON string below
json = "{}"
# create an instance of Response from a JSON string
response_instance = Response.from_json(json)
# print the JSON string representation of the object
print(Response.to_json())

# convert the object into a dict
response_dict = response_instance.to_dict()
# create an instance of Response from a dict
response_from_dict = Response.from_dict(response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


