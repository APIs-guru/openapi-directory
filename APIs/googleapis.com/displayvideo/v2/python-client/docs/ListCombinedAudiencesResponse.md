# ListCombinedAudiencesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_audiences** | [**List[CombinedAudience]**](CombinedAudience.md) | The list of combined audiences. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListCombinedAudiences&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_combined_audiences_response import ListCombinedAudiencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCombinedAudiencesResponse from a JSON string
list_combined_audiences_response_instance = ListCombinedAudiencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCombinedAudiencesResponse.to_json())

# convert the object into a dict
list_combined_audiences_response_dict = list_combined_audiences_response_instance.to_dict()
# create an instance of ListCombinedAudiencesResponse from a dict
list_combined_audiences_response_from_dict = ListCombinedAudiencesResponse.from_dict(list_combined_audiences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


