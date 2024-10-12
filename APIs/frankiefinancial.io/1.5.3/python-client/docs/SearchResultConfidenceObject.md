# SearchResultConfidenceObject

Provides details of the confidence level we have that this is the item we're looking for. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | [**EnumSearchResultConfidence**](EnumSearchResultConfidence.md) |  | [optional] 
**notes** | **List[str]** | Free-form list of descriptions around any partial matches  | [optional] 
**score** | **int** | Numeric score on a scale of 0 (none) to 100 (as certain as possible) on which the confidence level is based. Whole integers only. | [optional] 

## Example

```python
from openapi_client.models.search_result_confidence_object import SearchResultConfidenceObject

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResultConfidenceObject from a JSON string
search_result_confidence_object_instance = SearchResultConfidenceObject.from_json(json)
# print the JSON string representation of the object
print(SearchResultConfidenceObject.to_json())

# convert the object into a dict
search_result_confidence_object_dict = search_result_confidence_object_instance.to_dict()
# create an instance of SearchResultConfidenceObject from a dict
search_result_confidence_object_from_dict = SearchResultConfidenceObject.from_dict(search_result_confidence_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


