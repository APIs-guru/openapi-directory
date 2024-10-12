# XPSRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_ids** | **List[int]** | The ids of the columns. Note: The below &#x60;values&#x60; field must match order of this field, if this field is set. | [optional] 
**values** | **List[object]** | The values of the row cells, given in the same order as the column_ids. If column_ids is not set, then in the same order as the input_feature_column_ids in TablesModelMetadata. | [optional] 

## Example

```python
from openapi_client.models.xps_row import XPSRow

# TODO update the JSON string below
json = "{}"
# create an instance of XPSRow from a JSON string
xps_row_instance = XPSRow.from_json(json)
# print the JSON string representation of the object
print(XPSRow.to_json())

# convert the object into a dict
xps_row_dict = xps_row_instance.to_dict()
# create an instance of XPSRow from a dict
xps_row_from_dict = XPSRow.from_dict(xps_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


