# ListEnterprisesResponse

Response to a request to list enterprises.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enterprises** | [**List[Enterprise]**](Enterprise.md) | The list of enterprises. | [optional] 
**next_page_token** | **str** | If there are more results, a token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_enterprises_response import ListEnterprisesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEnterprisesResponse from a JSON string
list_enterprises_response_instance = ListEnterprisesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEnterprisesResponse.to_json())

# convert the object into a dict
list_enterprises_response_dict = list_enterprises_response_instance.to_dict()
# create an instance of ListEnterprisesResponse from a dict
list_enterprises_response_from_dict = ListEnterprisesResponse.from_dict(list_enterprises_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


