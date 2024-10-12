# PivotValueRegion

The metric values in the pivot region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | **List[str]** | The values of the metrics in each of the pivot regions. | [optional] 

## Example

```python
from openapi_client.models.pivot_value_region import PivotValueRegion

# TODO update the JSON string below
json = "{}"
# create an instance of PivotValueRegion from a JSON string
pivot_value_region_instance = PivotValueRegion.from_json(json)
# print the JSON string representation of the object
print(PivotValueRegion.to_json())

# convert the object into a dict
pivot_value_region_dict = pivot_value_region_instance.to_dict()
# create an instance of PivotValueRegion from a dict
pivot_value_region_from_dict = PivotValueRegion.from_dict(pivot_value_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


