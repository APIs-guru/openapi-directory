# Analysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **str** |  | [optional] [readonly] 
**date_created** | **datetime** |  | [optional] 
**date_finished** | **datetime** |  | [optional] 
**date_last_modified** | **datetime** | Date of last modified analysis | [optional] 
**date_launched** | **datetime** |  | [optional] 
**features** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**slug** | **str** |  | [optional] [readonly] 
**status** | **str** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 
**urls_done** | **str** |  | [optional] [readonly] 
**urls_in_queue** | **str** |  | [optional] [readonly] 
**user** | [**User**](User.md) |  | 

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


