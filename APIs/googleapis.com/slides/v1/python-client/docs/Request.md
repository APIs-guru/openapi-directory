# Request

A single kind of update to apply to a presentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_image** | [**CreateImageRequest**](CreateImageRequest.md) |  | [optional] 
**create_line** | [**CreateLineRequest**](CreateLineRequest.md) |  | [optional] 
**create_paragraph_bullets** | [**CreateParagraphBulletsRequest**](CreateParagraphBulletsRequest.md) |  | [optional] 
**create_shape** | [**CreateShapeRequest**](CreateShapeRequest.md) |  | [optional] 
**create_sheets_chart** | [**CreateSheetsChartRequest**](CreateSheetsChartRequest.md) |  | [optional] 
**create_slide** | [**CreateSlideRequest**](CreateSlideRequest.md) |  | [optional] 
**create_table** | [**CreateTableRequest**](CreateTableRequest.md) |  | [optional] 
**create_video** | [**CreateVideoRequest**](CreateVideoRequest.md) |  | [optional] 
**delete_object** | [**DeleteObjectRequest**](DeleteObjectRequest.md) |  | [optional] 
**delete_paragraph_bullets** | [**DeleteParagraphBulletsRequest**](DeleteParagraphBulletsRequest.md) |  | [optional] 
**delete_table_column** | [**DeleteTableColumnRequest**](DeleteTableColumnRequest.md) |  | [optional] 
**delete_table_row** | [**DeleteTableRowRequest**](DeleteTableRowRequest.md) |  | [optional] 
**delete_text** | [**DeleteTextRequest**](DeleteTextRequest.md) |  | [optional] 
**duplicate_object** | [**DuplicateObjectRequest**](DuplicateObjectRequest.md) |  | [optional] 
**group_objects** | [**GroupObjectsRequest**](GroupObjectsRequest.md) |  | [optional] 
**insert_table_columns** | [**InsertTableColumnsRequest**](InsertTableColumnsRequest.md) |  | [optional] 
**insert_table_rows** | [**InsertTableRowsRequest**](InsertTableRowsRequest.md) |  | [optional] 
**insert_text** | [**InsertTextRequest**](InsertTextRequest.md) |  | [optional] 
**merge_table_cells** | [**MergeTableCellsRequest**](MergeTableCellsRequest.md) |  | [optional] 
**refresh_sheets_chart** | [**RefreshSheetsChartRequest**](RefreshSheetsChartRequest.md) |  | [optional] 
**replace_all_shapes_with_image** | [**ReplaceAllShapesWithImageRequest**](ReplaceAllShapesWithImageRequest.md) |  | [optional] 
**replace_all_shapes_with_sheets_chart** | [**ReplaceAllShapesWithSheetsChartRequest**](ReplaceAllShapesWithSheetsChartRequest.md) |  | [optional] 
**replace_all_text** | [**ReplaceAllTextRequest**](ReplaceAllTextRequest.md) |  | [optional] 
**replace_image** | [**ReplaceImageRequest**](ReplaceImageRequest.md) |  | [optional] 
**reroute_line** | [**RerouteLineRequest**](RerouteLineRequest.md) |  | [optional] 
**ungroup_objects** | [**UngroupObjectsRequest**](UngroupObjectsRequest.md) |  | [optional] 
**unmerge_table_cells** | [**UnmergeTableCellsRequest**](UnmergeTableCellsRequest.md) |  | [optional] 
**update_image_properties** | [**UpdateImagePropertiesRequest**](UpdateImagePropertiesRequest.md) |  | [optional] 
**update_line_category** | [**UpdateLineCategoryRequest**](UpdateLineCategoryRequest.md) |  | [optional] 
**update_line_properties** | [**UpdateLinePropertiesRequest**](UpdateLinePropertiesRequest.md) |  | [optional] 
**update_page_element_alt_text** | [**UpdatePageElementAltTextRequest**](UpdatePageElementAltTextRequest.md) |  | [optional] 
**update_page_element_transform** | [**UpdatePageElementTransformRequest**](UpdatePageElementTransformRequest.md) |  | [optional] 
**update_page_elements_z_order** | [**UpdatePageElementsZOrderRequest**](UpdatePageElementsZOrderRequest.md) |  | [optional] 
**update_page_properties** | [**UpdatePagePropertiesRequest**](UpdatePagePropertiesRequest.md) |  | [optional] 
**update_paragraph_style** | [**UpdateParagraphStyleRequest**](UpdateParagraphStyleRequest.md) |  | [optional] 
**update_shape_properties** | [**UpdateShapePropertiesRequest**](UpdateShapePropertiesRequest.md) |  | [optional] 
**update_slide_properties** | [**UpdateSlidePropertiesRequest**](UpdateSlidePropertiesRequest.md) |  | [optional] 
**update_slides_position** | [**UpdateSlidesPositionRequest**](UpdateSlidesPositionRequest.md) |  | [optional] 
**update_table_border_properties** | [**UpdateTableBorderPropertiesRequest**](UpdateTableBorderPropertiesRequest.md) |  | [optional] 
**update_table_cell_properties** | [**UpdateTableCellPropertiesRequest**](UpdateTableCellPropertiesRequest.md) |  | [optional] 
**update_table_column_properties** | [**UpdateTableColumnPropertiesRequest**](UpdateTableColumnPropertiesRequest.md) |  | [optional] 
**update_table_row_properties** | [**UpdateTableRowPropertiesRequest**](UpdateTableRowPropertiesRequest.md) |  | [optional] 
**update_text_style** | [**UpdateTextStyleRequest**](UpdateTextStyleRequest.md) |  | [optional] 
**update_video_properties** | [**UpdateVideoPropertiesRequest**](UpdateVideoPropertiesRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


