# CompatibleFields

Represents a response to the queryCompatibleFields method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cross_dimension_reach_report_compatible_fields** | [**CrossDimensionReachReportCompatibleFields**](CrossDimensionReachReportCompatibleFields.md) |  | [optional] 
**floodlight_report_compatible_fields** | [**FloodlightReportCompatibleFields**](FloodlightReportCompatibleFields.md) |  | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#compatibleFields. | [optional] 
**path_to_conversion_report_compatible_fields** | [**PathToConversionReportCompatibleFields**](PathToConversionReportCompatibleFields.md) |  | [optional] 
**reach_report_compatible_fields** | [**ReachReportCompatibleFields**](ReachReportCompatibleFields.md) |  | [optional] 
**report_compatible_fields** | [**ReportCompatibleFields**](ReportCompatibleFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.compatible_fields import CompatibleFields

# TODO update the JSON string below
json = "{}"
# create an instance of CompatibleFields from a JSON string
compatible_fields_instance = CompatibleFields.from_json(json)
# print the JSON string representation of the object
print(CompatibleFields.to_json())

# convert the object into a dict
compatible_fields_dict = compatible_fields_instance.to_dict()
# create an instance of CompatibleFields from a dict
compatible_fields_from_dict = CompatibleFields.from_dict(compatible_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


