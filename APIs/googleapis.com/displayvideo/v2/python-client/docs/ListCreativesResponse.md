# ListCreativesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creatives** | [**List[Creative]**](Creative.md) | The list of creatives. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListCreativesRequest&#x60; method to retrieve the next page of results. If this field is null, it means this is the last page. | [optional] 

## Example

```python
from openapi_client.models.list_creatives_response import ListCreativesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreativesResponse from a JSON string
list_creatives_response_instance = ListCreativesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCreativesResponse.to_json())

# convert the object into a dict
list_creatives_response_dict = list_creatives_response_instance.to_dict()
# create an instance of ListCreativesResponse from a dict
list_creatives_response_from_dict = ListCreativesResponse.from_dict(list_creatives_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


