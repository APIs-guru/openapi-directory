# IdentifyCandidate

All possible faces that may qualify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | 
**person_id** | **str** | Id of candidate | 

## Example

```python
from openapi_client.models.identify_candidate import IdentifyCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of IdentifyCandidate from a JSON string
identify_candidate_instance = IdentifyCandidate.from_json(json)
# print the JSON string representation of the object
print(IdentifyCandidate.to_json())

# convert the object into a dict
identify_candidate_dict = identify_candidate_instance.to_dict()
# create an instance of IdentifyCandidate from a dict
identify_candidate_from_dict = IdentifyCandidate.from_dict(identify_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


