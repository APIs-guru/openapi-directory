# AnalysisLinks


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
**template** | **str** |  | [optional] 
**time_rule** | **str** |  | [optional] 
**time_rule_plug_in** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_links import AnalysisLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisLinks from a JSON string
analysis_links_instance = AnalysisLinks.from_json(json)
# print the JSON string representation of the object
print(AnalysisLinks.to_json())

# convert the object into a dict
analysis_links_dict = analysis_links_instance.to_dict()
# create an instance of AnalysisLinks from a dict
analysis_links_from_dict = AnalysisLinks.from_dict(analysis_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


