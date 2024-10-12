# PivotHeader

Dimensions' values in a single pivot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pivot_dimension_headers** | [**List[PivotDimensionHeader]**](PivotDimensionHeader.md) | The size is the same as the cardinality of the corresponding dimension combinations. | [optional] 
**row_count** | **int** | The cardinality of the pivot. The total number of rows for this pivot&#39;s fields regardless of how the parameters &#x60;offset&#x60; and &#x60;limit&#x60; are specified in the request. | [optional] 

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


