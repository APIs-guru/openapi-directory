# IdentifyRequest

Request body for identify face operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**face_ids** | **List[str]** | Array of query faces faceIds, created by the Face - Detect. Each of the faces are identified independently. The valid number of faceIds is between [1, 10]. | 
**large_person_group_id** | **str** | LargePersonGroupId of the target large person group, created by LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time. | [optional] 
**max_num_of_candidates_returned** | **int** | The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1). | [optional] 
**person_group_id** | **str** | PersonGroupId of the target person group, created by PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time. | [optional] 

## Example

```python
from openapi_client.models.identify_request import IdentifyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentifyRequest from a JSON string
identify_request_instance = IdentifyRequest.from_json(json)
# print the JSON string representation of the object
print(IdentifyRequest.to_json())

# convert the object into a dict
identify_request_dict = identify_request_instance.to_dict()
# create an instance of IdentifyRequest from a dict
identify_request_from_dict = IdentifyRequest.from_dict(identify_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


