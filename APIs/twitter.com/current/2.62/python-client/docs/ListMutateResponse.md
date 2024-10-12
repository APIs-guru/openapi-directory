# ListMutateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListMutateResponseData**](ListMutateResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_mutate_response import ListMutateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMutateResponse from a JSON string
list_mutate_response_instance = ListMutateResponse.from_json(json)
# print the JSON string representation of the object
print(ListMutateResponse.to_json())

# convert the object into a dict
list_mutate_response_dict = list_mutate_response_instance.to_dict()
# create an instance of ListMutateResponse from a dict
list_mutate_response_from_dict = ListMutateResponse.from_dict(list_mutate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


