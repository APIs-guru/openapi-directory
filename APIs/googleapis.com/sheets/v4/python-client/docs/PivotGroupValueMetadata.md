# PivotGroupValueMetadata

Metadata about a value in a pivot grouping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collapsed** | **bool** | True if the data corresponding to the value is collapsed. | [optional] 
**value** | [**ExtendedValue**](ExtendedValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.pivot_group_value_metadata import PivotGroupValueMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PivotGroupValueMetadata from a JSON string
pivot_group_value_metadata_instance = PivotGroupValueMetadata.from_json(json)
# print the JSON string representation of the object
print(PivotGroupValueMetadata.to_json())

# convert the object into a dict
pivot_group_value_metadata_dict = pivot_group_value_metadata_instance.to_dict()
# create an instance of PivotGroupValueMetadata from a dict
pivot_group_value_metadata_from_dict = PivotGroupValueMetadata.from_dict(pivot_group_value_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


