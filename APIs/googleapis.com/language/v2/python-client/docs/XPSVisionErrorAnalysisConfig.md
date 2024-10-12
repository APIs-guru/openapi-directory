# XPSVisionErrorAnalysisConfig

The vision model error analysis configuration. Next tag: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_count** | **int** | The number of query examples in error analysis. | [optional] 
**query_type** | **str** | The query type used in retrieval. The enum values are frozen in the foreseeable future. | [optional] 

## Example

```python
from openapi_client.models.xps_vision_error_analysis_config import XPSVisionErrorAnalysisConfig

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVisionErrorAnalysisConfig from a JSON string
xps_vision_error_analysis_config_instance = XPSVisionErrorAnalysisConfig.from_json(json)
# print the JSON string representation of the object
print(XPSVisionErrorAnalysisConfig.to_json())

# convert the object into a dict
xps_vision_error_analysis_config_dict = xps_vision_error_analysis_config_instance.to_dict()
# create an instance of XPSVisionErrorAnalysisConfig from a dict
xps_vision_error_analysis_config_from_dict = XPSVisionErrorAnalysisConfig.from_dict(xps_vision_error_analysis_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


