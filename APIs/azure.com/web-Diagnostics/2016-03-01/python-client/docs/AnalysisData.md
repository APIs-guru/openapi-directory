# AnalysisData

Class Representing Detector Evidence used for analysis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[List[AnalysisDataDataInnerInner]]** | Additional Source Data | [optional] 
**detector_definition** | [**DetectorDefinition**](DetectorDefinition.md) |  | [optional] 
**detector_meta_data** | [**ResponseMetaData**](ResponseMetaData.md) |  | [optional] 
**metrics** | [**List[DiagnosticMetricSet]**](DiagnosticMetricSet.md) | Source Metrics | [optional] 
**source** | **str** | Name of the Detector | [optional] 

## Example

```python
from openapi_client.models.analysis_data import AnalysisData

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisData from a JSON string
analysis_data_instance = AnalysisData.from_json(json)
# print the JSON string representation of the object
print(AnalysisData.to_json())

# convert the object into a dict
analysis_data_dict = analysis_data_instance.to_dict()
# create an instance of AnalysisData from a dict
analysis_data_from_dict = AnalysisData.from_dict(analysis_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


