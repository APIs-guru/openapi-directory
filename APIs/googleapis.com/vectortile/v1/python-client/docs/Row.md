# Row

A row of altitude points in the elevation grid, ordered from west to east.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**altitude_diffs** | **List[int]** | The difference between each successive pair of altitudes, from west to east. The first, westmost point, is just the altitude rather than a diff. The units are specified by the altitude_multiplier parameter above; the value in meters is given by altitude_multiplier * altitude_diffs[n]. The altitude row (in metres above sea level) can be reconstructed with: a[0] &#x3D; altitude_diffs[0] * altitude_multiplier when n &gt; 0, a[n] &#x3D; a[n-1] + altitude_diffs[n-1] * altitude_multiplier. | [optional] 

## Example

```python
from openapi_client.models.row import Row

# TODO update the JSON string below
json = "{}"
# create an instance of Row from a JSON string
row_instance = Row.from_json(json)
# print the JSON string representation of the object
print(Row.to_json())

# convert the object into a dict
row_dict = row_instance.to_dict()
# create an instance of Row from a dict
row_from_dict = Row.from_dict(row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


