# ValueRange

Data within a range of the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**major_dimension** | **str** | The major dimension of the values. For output, if the spreadsheet data is: &#x60;A1&#x3D;1,B1&#x3D;2,A2&#x3D;3,B2&#x3D;4&#x60;, then requesting &#x60;range&#x3D;A1:B2,majorDimension&#x3D;ROWS&#x60; will return &#x60;[[1,2],[3,4]]&#x60;, whereas requesting &#x60;range&#x3D;A1:B2,majorDimension&#x3D;COLUMNS&#x60; will return &#x60;[[1,3],[2,4]]&#x60;. For input, with &#x60;range&#x3D;A1:B2,majorDimension&#x3D;ROWS&#x60; then &#x60;[[1,2],[3,4]]&#x60; will set &#x60;A1&#x3D;1,B1&#x3D;2,A2&#x3D;3,B2&#x3D;4&#x60;. With &#x60;range&#x3D;A1:B2,majorDimension&#x3D;COLUMNS&#x60; then &#x60;[[1,2],[3,4]]&#x60; will set &#x60;A1&#x3D;1,B1&#x3D;3,A2&#x3D;2,B2&#x3D;4&#x60;. When writing, if this field is not set, it defaults to ROWS. | [optional] 
**range** | **str** | The range the values cover, in [A1 notation](/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended. | [optional] 
**values** | **List[List[object]]** | The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string. | [optional] 

## Example

```python
from openapi_client.models.value_range import ValueRange

# TODO update the JSON string below
json = "{}"
# create an instance of ValueRange from a JSON string
value_range_instance = ValueRange.from_json(json)
# print the JSON string representation of the object
print(ValueRange.to_json())

# convert the object into a dict
value_range_dict = value_range_instance.to_dict()
# create an instance of ValueRange from a dict
value_range_from_dict = ValueRange.from_dict(value_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


