# DataSubjectRightCancelDeleteRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email used for cancel delete with x-authz-bypass headers | 

## Example

```python
from openapi_client.models.data_subject_right_cancel_delete_request_request import DataSubjectRightCancelDeleteRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightCancelDeleteRequestRequest from a JSON string
data_subject_right_cancel_delete_request_request_instance = DataSubjectRightCancelDeleteRequestRequest.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightCancelDeleteRequestRequest.to_json())

# convert the object into a dict
data_subject_right_cancel_delete_request_request_dict = data_subject_right_cancel_delete_request_request_instance.to_dict()
# create an instance of DataSubjectRightCancelDeleteRequestRequest from a dict
data_subject_right_cancel_delete_request_request_from_dict = DataSubjectRightCancelDeleteRequestRequest.from_dict(data_subject_right_cancel_delete_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


