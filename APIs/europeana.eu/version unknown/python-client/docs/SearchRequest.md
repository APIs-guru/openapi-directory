# SearchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost** | **str** |  | [optional] 
**callback** | **str** |  | [optional] 
**colour_palette** | **List[str]** |  | [optional] 
**cursor** | **str** |  | [optional] 
**facet** | **List[str]** |  | [optional] 
**hit** | [**Hit**](Hit.md) |  | [optional] 
**landing_page** | **bool** |  | [optional] 
**media** | **bool** |  | [optional] 
**profile** | **List[str]** |  | [optional] 
**qf** | **List[str]** |  | [optional] 
**query** | **str** |  | 
**reusability** | **List[str]** |  | [optional] 
**rows** | **int** |  | [optional] 
**sort** | **List[str]** |  | [optional] 
**start** | **int** |  | [optional] 
**text_fulltext** | **bool** |  | [optional] 
**theme** | **str** |  | [optional] 
**thumbnail** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.search_request import SearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRequest from a JSON string
search_request_instance = SearchRequest.from_json(json)
# print the JSON string representation of the object
print(SearchRequest.to_json())

# convert the object into a dict
search_request_dict = search_request_instance.to_dict()
# create an instance of SearchRequest from a dict
search_request_from_dict = SearchRequest.from_dict(search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


