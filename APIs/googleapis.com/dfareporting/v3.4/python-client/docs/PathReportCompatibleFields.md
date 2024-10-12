# PathReportCompatibleFields

Represents fields that are compatible to be selected for a report of type \"PATH\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_groupings** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;channelGroupings\&quot; section of the report. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;dimensions\&quot; section of the report. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#pathReportCompatibleFields. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | Metrics which are compatible to be selected in the \&quot;metricNames\&quot; section of the report. | [optional] 
**path_filters** | [**List[Dimension]**](Dimension.md) | Dimensions which are compatible to be selected in the \&quot;pathFilters\&quot; section of the report. | [optional] 

## Example

```python
from openapi_client.models.path_report_compatible_fields import PathReportCompatibleFields

# TODO update the JSON string below
json = "{}"
# create an instance of PathReportCompatibleFields from a JSON string
path_report_compatible_fields_instance = PathReportCompatibleFields.from_json(json)
# print the JSON string representation of the object
print(PathReportCompatibleFields.to_json())

# convert the object into a dict
path_report_compatible_fields_dict = path_report_compatible_fields_instance.to_dict()
# create an instance of PathReportCompatibleFields from a dict
path_report_compatible_fields_from_dict = PathReportCompatibleFields.from_dict(path_report_compatible_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


