# AnalysisTemplateLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_rule** | **str** |  | [optional] 
**analysis_rule_plug_in** | **str** |  | [optional] 
**categories** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**target** | **str** |  | [optional] 
**time_rule** | **str** |  | [optional] 
**time_rule_plug_in** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_template_links import AnalysisTemplateLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisTemplateLinks from a JSON string
analysis_template_links_instance = AnalysisTemplateLinks.from_json(json)
# print the JSON string representation of the object
print(AnalysisTemplateLinks.to_json())

# convert the object into a dict
analysis_template_links_dict = analysis_template_links_instance.to_dict()
# create an instance of AnalysisTemplateLinks from a dict
analysis_template_links_from_dict = AnalysisTemplateLinks.from_dict(analysis_template_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


