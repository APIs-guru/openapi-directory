# Breakdown

A detailed impact breakdown for a group of regions where the impact of the issue on different shopping destinations is the same.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **List[str]** | Human readable, localized description of issue&#39;s effect on different targets. Should be rendered as a list. For example: * \&quot;Products not showing in ads\&quot; * \&quot;Products not showing organically\&quot; | [optional] 
**regions** | [**List[BreakdownRegion]**](BreakdownRegion.md) | Lists of regions. Should be rendered as a title for this group of details. The full list should be shown to merchant. If the list is too long, it is recommended to make it expandable. | [optional] 

## Example

```python
from openapi_client.models.breakdown import Breakdown

# TODO update the JSON string below
json = "{}"
# create an instance of Breakdown from a JSON string
breakdown_instance = Breakdown.from_json(json)
# print the JSON string representation of the object
print(Breakdown.to_json())

# convert the object into a dict
breakdown_dict = breakdown_instance.to_dict()
# create an instance of Breakdown from a dict
breakdown_from_dict = Breakdown.from_dict(breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


