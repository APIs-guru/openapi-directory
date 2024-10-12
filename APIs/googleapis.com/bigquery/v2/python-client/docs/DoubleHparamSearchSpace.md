# DoubleHparamSearchSpace

Search space for a double hyperparameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**DoubleCandidates**](DoubleCandidates.md) |  | [optional] 
**range** | [**DoubleRange**](DoubleRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.double_hparam_search_space import DoubleHparamSearchSpace

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleHparamSearchSpace from a JSON string
double_hparam_search_space_instance = DoubleHparamSearchSpace.from_json(json)
# print the JSON string representation of the object
print(DoubleHparamSearchSpace.to_json())

# convert the object into a dict
double_hparam_search_space_dict = double_hparam_search_space_instance.to_dict()
# create an instance of DoubleHparamSearchSpace from a dict
double_hparam_search_space_from_dict = DoubleHparamSearchSpace.from_dict(double_hparam_search_space_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


