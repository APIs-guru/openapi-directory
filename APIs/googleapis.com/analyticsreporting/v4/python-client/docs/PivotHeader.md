# PivotHeader

The headers for each of the pivot sections defined in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pivot_header_entries** | [**List[PivotHeaderEntry]**](PivotHeaderEntry.md) | A single pivot section header. | [optional] 
**total_pivot_groups_count** | **int** | The total number of groups for this pivot. | [optional] 

## Example

```python
from openapi_client.models.pivot_header import PivotHeader

# TODO update the JSON string below
json = "{}"
# create an instance of PivotHeader from a JSON string
pivot_header_instance = PivotHeader.from_json(json)
# print the JSON string representation of the object
print(PivotHeader.to_json())

# convert the object into a dict
pivot_header_dict = pivot_header_instance.to_dict()
# create an instance of PivotHeader from a dict
pivot_header_from_dict = PivotHeader.from_dict(pivot_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


