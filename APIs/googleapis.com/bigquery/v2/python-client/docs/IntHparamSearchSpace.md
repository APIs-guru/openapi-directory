# IntHparamSearchSpace

Search space for an int hyperparameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**IntCandidates**](IntCandidates.md) |  | [optional] 
**range** | [**IntRange**](IntRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.int_hparam_search_space import IntHparamSearchSpace

# TODO update the JSON string below
json = "{}"
# create an instance of IntHparamSearchSpace from a JSON string
int_hparam_search_space_instance = IntHparamSearchSpace.from_json(json)
# print the JSON string representation of the object
print(IntHparamSearchSpace.to_json())

# convert the object into a dict
int_hparam_search_space_dict = int_hparam_search_space_instance.to_dict()
# create an instance of IntHparamSearchSpace from a dict
int_hparam_search_space_from_dict = IntHparamSearchSpace.from_dict(int_hparam_search_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


