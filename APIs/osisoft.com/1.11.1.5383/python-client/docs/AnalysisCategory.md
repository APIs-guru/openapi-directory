# AnalysisCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**AnalysisCategoryLinks**](AnalysisCategoryLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_category import AnalysisCategory

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisCategory from a JSON string
analysis_category_instance = AnalysisCategory.from_json(json)
# print the JSON string representation of the object
print(AnalysisCategory.to_json())

# convert the object into a dict
analysis_category_dict = analysis_category_instance.to_dict()
# create an instance of AnalysisCategory from a dict
analysis_category_from_dict = AnalysisCategory.from_dict(analysis_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


