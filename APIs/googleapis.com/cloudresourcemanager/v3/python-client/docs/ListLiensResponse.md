# ListLiensResponse

The response message for Liens.ListLiens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**liens** | [**List[Lien]**](Lien.md) | A list of Liens. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_liens_response import ListLiensResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLiensResponse from a JSON string
list_liens_response_instance = ListLiensResponse.from_json(json)
# print the JSON string representation of the object
print(ListLiensResponse.to_json())

# convert the object into a dict
list_liens_response_dict = list_liens_response_instance.to_dict()
# create an instance of ListLiensResponse from a dict
list_liens_response_from_dict = ListLiensResponse.from_dict(list_liens_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


