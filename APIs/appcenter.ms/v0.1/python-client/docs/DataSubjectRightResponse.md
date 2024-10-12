# DataSubjectRightResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | ISO 8601 format timestamp of when request was created. | 
**token** | **str** | Unique request identifier | 

## Example

```python
from openapi_client.models.data_subject_right_response import DataSubjectRightResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightResponse from a JSON string
data_subject_right_response_instance = DataSubjectRightResponse.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightResponse.to_json())

# convert the object into a dict
data_subject_right_response_dict = data_subject_right_response_instance.to_dict()
# create an instance of DataSubjectRightResponse from a dict
data_subject_right_response_from_dict = DataSubjectRightResponse.from_dict(data_subject_right_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


