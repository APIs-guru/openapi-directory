# AnalysisTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_rule_plug_in_name** | **str** |  | [optional] 
**category_names** | **List[str]** |  | [optional] 
**create_enabled** | **bool** |  | [optional] 
**description** | **str** |  | [optional] 
**group_id** | **int** |  | [optional] 
**has_notification_template** | **bool** |  | [optional] 
**has_target** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**AnalysisTemplateLinks**](AnalysisTemplateLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**output_time** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**target_name** | **str** |  | [optional] 
**time_rule_plug_in_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_template import AnalysisTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisTemplate from a JSON string
analysis_template_instance = AnalysisTemplate.from_json(json)
# print the JSON string representation of the object
print(AnalysisTemplate.to_json())

# convert the object into a dict
analysis_template_dict = analysis_template_instance.to_dict()
# create an instance of AnalysisTemplate from a dict
analysis_template_from_dict = AnalysisTemplate.from_dict(analysis_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


