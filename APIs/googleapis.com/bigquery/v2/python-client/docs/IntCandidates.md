# IntCandidates

Discrete candidates of an int hyperparameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | **List[str]** | Candidates for the int parameter in increasing order. | [optional] 

## Example

```python
from openapi_client.models.int_candidates import IntCandidates

# TODO update the JSON string below
json = "{}"
# create an instance of IntCandidates from a JSON string
int_candidates_instance = IntCandidates.from_json(json)
# print the JSON string representation of the object
print(IntCandidates.to_json())

# convert the object into a dict
int_candidates_dict = int_candidates_instance.to_dict()
# create an instance of IntCandidates from a dict
int_candidates_from_dict = IntCandidates.from_dict(int_candidates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


