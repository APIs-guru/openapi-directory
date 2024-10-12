# PathToConversionReportCompatibleFields

Represents fields that are compatible to be selected for a report of type \"PATH_TO_CONVERSION\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_dimensions** | [**List[Dimension]**](Dimension.md) | Conversion dimensions which are compatible to be selected in the \&quot;conversionDimensions\&quot; section of the report. | [optional] 
**custom_floodlight_variables** | [**List[Dimension]**](Dimension.md) | Custom floodlight variables which are compatible to be selected in the \&quot;customFloodlightVariables\&quot; section of the report. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;metricNames\&quot; section of the report. | [optional] 
**per_interaction_dimensions** | [**List[Dimension]**](Dimension.md) | Per-interaction dimensions which are compatible to be selected in the \&quot;perInteractionDimensions\&quot; section of the report. | [optional] 

## Example

```python
from openapi_client.models.path_to_conversion_report_compatible_fields import PathToConversionReportCompatibleFields

# TODO update the JSON string below
json = "{}"
# create an instance of PathToConversionReportCompatibleFields from a JSON string
path_to_conversion_report_compatible_fields_instance = PathToConversionReportCompatibleFields.from_json(json)
# print the JSON string representation of the object
print(PathToConversionReportCompatibleFields.to_json())

# convert the object into a dict
path_to_conversion_report_compatible_fields_dict = path_to_conversion_report_compatible_fields_instance.to_dict()
# create an instance of PathToConversionReportCompatibleFields from a dict
path_to_conversion_report_compatible_fields_from_dict = PathToConversionReportCompatibleFields.from_dict(path_to_conversion_report_compatible_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


