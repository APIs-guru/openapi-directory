# ListValuedResourcesResponse

Response message for listing the valued resources for a given simulation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 
**total_size** | **int** | The estimated total number of results matching the query. | [optional] 
**valued_resources** | [**List[ValuedResource]**](ValuedResource.md) | The valued resources that the attack path simulation identified. | [optional] 

## Example

```python
from openapi_client.models.list_valued_resources_response import ListValuedResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListValuedResourcesResponse from a JSON string
list_valued_resources_response_instance = ListValuedResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListValuedResourcesResponse.to_json())

# convert the object into a dict
list_valued_resources_response_dict = list_valued_resources_response_instance.to_dict()
# create an instance of ListValuedResourcesResponse from a dict
list_valued_resources_response_from_dict = ListValuedResourcesResponse.from_dict(list_valued_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


