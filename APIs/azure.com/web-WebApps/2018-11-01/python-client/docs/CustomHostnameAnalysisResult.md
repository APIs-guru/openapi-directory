# CustomHostnameAnalysisResult

Custom domain analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | CustomHostnameAnalysisResult resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_hostname_analysis_result import CustomHostnameAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of CustomHostnameAnalysisResult from a JSON string
custom_hostname_analysis_result_instance = CustomHostnameAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(CustomHostnameAnalysisResult.to_json())

# convert the object into a dict
custom_hostname_analysis_result_dict = custom_hostname_analysis_result_instance.to_dict()
# create an instance of CustomHostnameAnalysisResult from a dict
custom_hostname_analysis_result_from_dict = CustomHostnameAnalysisResult.from_dict(custom_hostname_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


