# CreativesListResponse

Creative List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creatives** | [**List[Creative]**](Creative.md) | Creative collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.creatives_list_response import CreativesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreativesListResponse from a JSON string
creatives_list_response_instance = CreativesListResponse.from_json(json)
# print the JSON string representation of the object
print(CreativesListResponse.to_json())

# convert the object into a dict
creatives_list_response_dict = creatives_list_response_instance.to_dict()
# create an instance of CreativesListResponse from a dict
creatives_list_response_from_dict = CreativesListResponse.from_dict(creatives_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


