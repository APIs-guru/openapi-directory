# ListSubmissionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **float** |  | 
**next_cursor** | **str** |  | 
**submissions** | [**List[Submission]**](Submission.md) |  | 

## Example

```python
from openapi_client.models.list_submissions_response import ListSubmissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubmissionsResponse from a JSON string
list_submissions_response_instance = ListSubmissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSubmissionsResponse.to_json())

# convert the object into a dict
list_submissions_response_dict = list_submissions_response_instance.to_dict()
# create an instance of ListSubmissionsResponse from a dict
list_submissions_response_from_dict = ListSubmissionsResponse.from_dict(list_submissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


