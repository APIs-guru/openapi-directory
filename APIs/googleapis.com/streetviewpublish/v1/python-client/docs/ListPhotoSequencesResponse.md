# ListPhotoSequencesResponse

Response to list all photo sequences that belong to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**photo_sequences** | [**List[Operation]**](Operation.md) | List of photo sequences via Operation interface. The maximum number of items returned is based on the pageSize field in the request. Each item in the list can have three possible states, * &#x60;Operation.done&#x60; &#x3D; false, if the processing of PhotoSequence is not finished yet. * &#x60;Operation.done&#x60; &#x3D; true and &#x60;Operation.error&#x60; is populated, if there was an error in processing. * &#x60;Operation.done&#x60; &#x3D; true and &#x60;Operation.response&#x60; contains a PhotoSequence message, In each sequence, only Id is populated. | [optional] 

## Example

```python
from openapi_client.models.list_photo_sequences_response import ListPhotoSequencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPhotoSequencesResponse from a JSON string
list_photo_sequences_response_instance = ListPhotoSequencesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPhotoSequencesResponse.to_json())

# convert the object into a dict
list_photo_sequences_response_dict = list_photo_sequences_response_instance.to_dict()
# create an instance of ListPhotoSequencesResponse from a dict
list_photo_sequences_response_from_dict = ListPhotoSequencesResponse.from_dict(list_photo_sequences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


