# DoubleCandidates

Discrete candidates of a double hyperparameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | **List[float]** | Candidates for the double parameter in increasing order. | [optional] 

## Example

```python
from openapi_client.models.double_candidates import DoubleCandidates

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleCandidates from a JSON string
double_candidates_instance = DoubleCandidates.from_json(json)
# print the JSON string representation of the object
print(DoubleCandidates.to_json())

# convert the object into a dict
double_candidates_dict = double_candidates_instance.to_dict()
# create an instance of DoubleCandidates from a dict
double_candidates_from_dict = DoubleCandidates.from_dict(double_candidates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


