# BatchNameMatchCandidatesOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names_and_match_candidates** | [**List[NameMatchCandidatesOut]**](NameMatchCandidatesOut.md) | Classified matched names | [optional] 

## Example

```python
from openapi_client.models.batch_name_match_candidates_out import BatchNameMatchCandidatesOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchNameMatchCandidatesOut from a JSON string
batch_name_match_candidates_out_instance = BatchNameMatchCandidatesOut.from_json(json)
# print the JSON string representation of the object
print(BatchNameMatchCandidatesOut.to_json())

# convert the object into a dict
batch_name_match_candidates_out_dict = batch_name_match_candidates_out_instance.to_dict()
# create an instance of BatchNameMatchCandidatesOut from a dict
batch_name_match_candidates_out_from_dict = BatchNameMatchCandidatesOut.from_dict(batch_name_match_candidates_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


