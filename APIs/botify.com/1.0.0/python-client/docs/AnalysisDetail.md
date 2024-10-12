# AnalysisDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** |  | [optional] [readonly] 
**date_finished** | **datetime** |  | [optional] 
**date_last_modified** | **datetime** | Date of last modified analysis | [optional] 
**date_launched** | **datetime** |  | [optional] 
**failures** | **str** |  | [optional] [readonly] 
**features** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**red_button_domain** | **str** |  | [optional] 
**slug** | **str** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 
**urls_done** | **str** |  | [optional] [readonly] 
**urls_in_queue** | **str** |  | [optional] [readonly] 
**user** | [**User**](User.md) |  | 

## Example

```python
from openapi_client.models.analysis_detail import AnalysisDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisDetail from a JSON string
analysis_detail_instance = AnalysisDetail.from_json(json)
# print the JSON string representation of the object
print(AnalysisDetail.to_json())

# convert the object into a dict
analysis_detail_dict = analysis_detail_instance.to_dict()
# create an instance of AnalysisDetail from a dict
analysis_detail_from_dict = AnalysisDetail.from_dict(analysis_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


