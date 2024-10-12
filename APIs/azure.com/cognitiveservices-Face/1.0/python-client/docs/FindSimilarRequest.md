# FindSimilarRequest

Request body for find similar operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**face_id** | **str** | FaceId of the query face. User needs to call Face - Detect first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call | 
**face_ids** | **List[str]** | An array of candidate faceIds. All of them are created by Face - Detect and the faceIds will expire 24 hours after the detection call. The number of faceIds is limited to 1000. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time. | [optional] 
**face_list_id** | **str** | An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time. | [optional] 
**large_face_list_id** | **str** | An existing user-specified unique candidate large face list, created in LargeFaceList - Create. Large face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time. | [optional] 
**max_num_of_candidates_returned** | **int** | The number of top similar faces returned. The valid range is [1, 1000]. | [optional] 
**mode** | **str** | Similar face searching mode. It can be \&quot;matchPerson\&quot; or \&quot;matchFace\&quot;. | [optional] [default to 'matchPerson']

## Example

```python
from openapi_client.models.find_similar_request import FindSimilarRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FindSimilarRequest from a JSON string
find_similar_request_instance = FindSimilarRequest.from_json(json)
# print the JSON string representation of the object
print(FindSimilarRequest.to_json())

# convert the object into a dict
find_similar_request_dict = find_similar_request_instance.to_dict()
# create an instance of FindSimilarRequest from a dict
find_similar_request_from_dict = FindSimilarRequest.from_dict(find_similar_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


