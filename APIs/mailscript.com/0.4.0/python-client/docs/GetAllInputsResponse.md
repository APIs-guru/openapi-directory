# GetAllInputsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllInputsResponseListInner]**](GetAllInputsResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_inputs_response import GetAllInputsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllInputsResponse from a JSON string
get_all_inputs_response_instance = GetAllInputsResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllInputsResponse.to_json())

# convert the object into a dict
get_all_inputs_response_dict = get_all_inputs_response_instance.to_dict()
# create an instance of GetAllInputsResponse from a dict
get_all_inputs_response_from_dict = GetAllInputsResponse.from_dict(get_all_inputs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


