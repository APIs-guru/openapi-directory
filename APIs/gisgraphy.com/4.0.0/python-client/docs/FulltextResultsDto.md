# FulltextResultsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**q_time** | **int** | how long the query took | [optional] 
**max_score** | **float** | the max score value accross all the results found | [optional] 
**message** | **str** | a message | [optional] 
**num_found** | **int** | how many results were found whatever the pagination | [optional] 
**result** | [**List[SolrResponseDto]**](SolrResponseDto.md) |  | [optional] 
**results_size** | **int** | how many results are return | [optional] 

## Example

```python
from openapi_client.models.fulltext_results_dto import FulltextResultsDto

# TODO update the JSON string below
json = "{}"
# create an instance of FulltextResultsDto from a JSON string
fulltext_results_dto_instance = FulltextResultsDto.from_json(json)
# print the JSON string representation of the object
print(FulltextResultsDto.to_json())

# convert the object into a dict
fulltext_results_dto_dict = fulltext_results_dto_instance.to_dict()
# create an instance of FulltextResultsDto from a dict
fulltext_results_dto_from_dict = FulltextResultsDto.from_dict(fulltext_results_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


