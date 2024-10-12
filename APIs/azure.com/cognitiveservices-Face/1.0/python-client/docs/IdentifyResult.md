# IdentifyResult

Response body for identify face operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**candidates** | [**List[IdentifyCandidate]**](IdentifyCandidate.md) | Identified person candidates for that face (ranked by confidence). Array size should be no larger than input maxNumOfCandidatesReturned. If no person is identified, will return an empty array. | 
**face_id** | **str** | FaceId of the query face | 

## Example

```python
from openapi_client.models.identify_result import IdentifyResult

# TODO update the JSON string below
json = "{}"
# create an instance of IdentifyResult from a JSON string
identify_result_instance = IdentifyResult.from_json(json)
# print the JSON string representation of the object
print(IdentifyResult.to_json())

# convert the object into a dict
identify_result_dict = identify_result_instance.to_dict()
# create an instance of IdentifyResult from a dict
identify_result_from_dict = IdentifyResult.from_dict(identify_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


