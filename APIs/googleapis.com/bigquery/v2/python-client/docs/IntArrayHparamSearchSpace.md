# IntArrayHparamSearchSpace

Search space for int array.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[IntArray]**](IntArray.md) | Candidates for the int array parameter. | [optional] 

## Example

```python
from openapi_client.models.int_array_hparam_search_space import IntArrayHparamSearchSpace

# TODO update the JSON string below
json = "{}"
# create an instance of IntArrayHparamSearchSpace from a JSON string
int_array_hparam_search_space_instance = IntArrayHparamSearchSpace.from_json(json)
# print the JSON string representation of the object
print(IntArrayHparamSearchSpace.to_json())

# convert the object into a dict
int_array_hparam_search_space_dict = int_array_hparam_search_space_instance.to_dict()
# create an instance of IntArrayHparamSearchSpace from a dict
int_array_hparam_search_space_from_dict = IntArrayHparamSearchSpace.from_dict(int_array_hparam_search_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


