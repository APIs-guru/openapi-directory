# ReportingMetadataEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compatible_dimensions** | **List[str]** | For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to. | [optional] 
**compatible_metrics** | **List[str]** | The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with. | [optional] 
**id** | **str** | Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric. | [optional] 
**kind** | **str** | Kind of resource this is, in this case adsense#reportingMetadataEntry. | [optional] [default to 'adsense#reportingMetadataEntry']
**required_dimensions** | **List[str]** | The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted. | [optional] 
**required_metrics** | **List[str]** | The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted. | [optional] 
**supported_products** | **List[str]** | The codes of the projects supported by the dimension or metric this reporting metadata entry describes. | [optional] 

## Example

```python
from openapi_client.models.reporting_metadata_entry import ReportingMetadataEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ReportingMetadataEntry from a JSON string
reporting_metadata_entry_instance = ReportingMetadataEntry.from_json(json)
# print the JSON string representation of the object
print(ReportingMetadataEntry.to_json())

# convert the object into a dict
reporting_metadata_entry_dict = reporting_metadata_entry_instance.to_dict()
# create an instance of ReportingMetadataEntry from a dict
reporting_metadata_entry_from_dict = ReportingMetadataEntry.from_dict(reporting_metadata_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


