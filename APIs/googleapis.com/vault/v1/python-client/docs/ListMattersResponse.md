# ListMattersResponse

Provides the list of matters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matters** | [**List[Matter]**](Matter.md) | List of matters. | [optional] 
**next_page_token** | **str** | Page token to retrieve the next page of results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_matters_response import ListMattersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMattersResponse from a JSON string
list_matters_response_instance = ListMattersResponse.from_json(json)
# print the JSON string representation of the object
print(ListMattersResponse.to_json())

# convert the object into a dict
list_matters_response_dict = list_matters_response_instance.to_dict()
# create an instance of ListMattersResponse from a dict
list_matters_response_from_dict = ListMattersResponse.from_dict(list_matters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


