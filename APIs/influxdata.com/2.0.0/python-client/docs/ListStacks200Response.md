# ListStacks200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stacks** | [**List[Stack]**](Stack.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_stacks200_response import ListStacks200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListStacks200Response from a JSON string
list_stacks200_response_instance = ListStacks200Response.from_json(json)
# print the JSON string representation of the object
print(ListStacks200Response.to_json())

# convert the object into a dict
list_stacks200_response_dict = list_stacks200_response_instance.to_dict()
# create an instance of ListStacks200Response from a dict
list_stacks200_response_from_dict = ListStacks200Response.from_dict(list_stacks200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


