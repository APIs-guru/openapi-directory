# AnalysisCategoryLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_category_links import AnalysisCategoryLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisCategoryLinks from a JSON string
analysis_category_links_instance = AnalysisCategoryLinks.from_json(json)
# print the JSON string representation of the object
print(AnalysisCategoryLinks.to_json())

# convert the object into a dict
analysis_category_links_dict = analysis_category_links_instance.to_dict()
# create an instance of AnalysisCategoryLinks from a dict
analysis_category_links_from_dict = AnalysisCategoryLinks.from_dict(analysis_category_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


