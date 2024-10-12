# Analysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_rule_plug_in_name** | **str** |  | [optional] 
**auto_created** | **bool** |  | [optional] 
**category_names** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**group_id** | **int** |  | [optional] 
**has_notification** | **bool** |  | [optional] 
**has_target** | **bool** |  | [optional] 
**has_template** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**is_configured** | **bool** |  | [optional] 
**is_time_rule_defined_by_template** | **bool** |  | [optional] 
**links** | [**AnalysisLinks**](AnalysisLinks.md) |  | [optional] 
**maximum_queue_size** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**output_time** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**priority** | **str** |  | [optional] 
**publish_results** | **bool** |  | [optional] 
**status** | **str** |  | [optional] 
**target_web_id** | **str** |  | [optional] 
**template_name** | **str** |  | [optional] 
**time_rule_plug_in_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis import Analysis

# TODO update the JSON string below
json = "{}"
# create an instance of Analysis from a JSON string
analysis_instance = Analysis.from_json(json)
# print the JSON string representation of the object
print(Analysis.to_json())

# convert the object into a dict
analysis_dict = analysis_instance.to_dict()
# create an instance of Analysis from a dict
analysis_from_dict = Analysis.from_dict(analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


