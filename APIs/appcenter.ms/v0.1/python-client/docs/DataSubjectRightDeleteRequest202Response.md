# DataSubjectRightDeleteRequest202Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | ISO 8601 format timestamp of when request was created. | 
**token** | **str** | Unique request identifier | 

## Example

```python
from openapi_client.models.data_subject_right_delete_request202_response import DataSubjectRightDeleteRequest202Response

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightDeleteRequest202Response from a JSON string
data_subject_right_delete_request202_response_instance = DataSubjectRightDeleteRequest202Response.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightDeleteRequest202Response.to_json())

# convert the object into a dict
data_subject_right_delete_request202_response_dict = data_subject_right_delete_request202_response_instance.to_dict()
# create an instance of DataSubjectRightDeleteRequest202Response from a dict
data_subject_right_delete_request202_response_from_dict = DataSubjectRightDeleteRequest202Response.from_dict(data_subject_right_delete_request202_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


