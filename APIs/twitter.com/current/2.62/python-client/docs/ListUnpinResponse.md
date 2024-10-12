# ListUnpinResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListPinnedResponseData**](ListPinnedResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_unpin_response import ListUnpinResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUnpinResponse from a JSON string
list_unpin_response_instance = ListUnpinResponse.from_json(json)
# print the JSON string representation of the object
print(ListUnpinResponse.to_json())

# convert the object into a dict
list_unpin_response_dict = list_unpin_response_instance.to_dict()
# create an instance of ListUnpinResponse from a dict
list_unpin_response_from_dict = ListUnpinResponse.from_dict(list_unpin_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


