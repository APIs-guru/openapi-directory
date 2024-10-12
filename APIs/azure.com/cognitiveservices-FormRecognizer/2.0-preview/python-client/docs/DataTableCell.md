# DataTableCell

Information about the extracted cell in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | **List[float]** | Quadrangle bounding box, with coordinates specified relative to the top-left of the original image. The eight numbers represent the four points, clockwise from the top-left corner relative to the text orientation. For image, the (x, y) coordinates are measured in pixels. For PDF, the (x, y) coordinates are measured in inches. | 
**column_index** | **int** | Column index of the cell. | 
**column_span** | **int** | Number of columns spanned by this cell. | [optional] 
**confidence** | **float** | Confidence value. | 
**elements** | **List[str]** | When includeTextDetails is set to true, a list of references to the text elements constituting this table cell. | [optional] 
**is_footer** | **bool** | Is the current cell a footer cell? | [optional] [default to False]
**is_header** | **bool** | Is the current cell a header cell? | [optional] [default to False]
**row_index** | **int** | Row index of the cell. | 
**row_span** | **int** | Number of rows spanned by this cell. | [optional] 
**text** | **str** | Text content of the cell. | 

## Example

```python
from openapi_client.models.data_table_cell import DataTableCell

# TODO update the JSON string below
json = "{}"
# create an instance of DataTableCell from a JSON string
data_table_cell_instance = DataTableCell.from_json(json)
# print the JSON string representation of the object
print(DataTableCell.to_json())

# convert the object into a dict
data_table_cell_dict = data_table_cell_instance.to_dict()
# create an instance of DataTableCell from a dict
data_table_cell_from_dict = DataTableCell.from_dict(data_table_cell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


