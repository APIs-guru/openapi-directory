# Get2SpacesSearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Space]**](Space.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2ComplianceJobsResponseMeta**](Get2ComplianceJobsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_spaces_search_response import Get2SpacesSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2SpacesSearchResponse from a JSON string
get2_spaces_search_response_instance = Get2SpacesSearchResponse.from_json(json)
# print the JSON string representation of the object
print(Get2SpacesSearchResponse.to_json())

# convert the object into a dict
get2_spaces_search_response_dict = get2_spaces_search_response_instance.to_dict()
# create an instance of Get2SpacesSearchResponse from a dict
get2_spaces_search_response_from_dict = Get2SpacesSearchResponse.from_dict(get2_spaces_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


