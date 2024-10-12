# ListPinnedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListPinnedResponseData**](ListPinnedResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_pinned_response import ListPinnedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPinnedResponse from a JSON string
list_pinned_response_instance = ListPinnedResponse.from_json(json)
# print the JSON string representation of the object
print(ListPinnedResponse.to_json())

# convert the object into a dict
list_pinned_response_dict = list_pinned_response_instance.to_dict()
# create an instance of ListPinnedResponse from a dict
list_pinned_response_from_dict = ListPinnedResponse.from_dict(list_pinned_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


