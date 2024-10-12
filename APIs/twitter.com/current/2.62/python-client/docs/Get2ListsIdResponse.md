# Get2ListsIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List** |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_lists_id_response import Get2ListsIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2ListsIdResponse from a JSON string
get2_lists_id_response_instance = Get2ListsIdResponse.from_json(json)
# print the JSON string representation of the object
print(Get2ListsIdResponse.to_json())

# convert the object into a dict
get2_lists_id_response_dict = get2_lists_id_response_instance.to_dict()
# create an instance of Get2ListsIdResponse from a dict
get2_lists_id_response_from_dict = Get2ListsIdResponse.from_dict(get2_lists_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


