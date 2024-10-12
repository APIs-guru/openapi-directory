# DataSubjectRightEmailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email used for cancel delete with x-authz-bypass headers | 

## Example

```python
from openapi_client.models.data_subject_right_email_request import DataSubjectRightEmailRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightEmailRequest from a JSON string
data_subject_right_email_request_instance = DataSubjectRightEmailRequest.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightEmailRequest.to_json())

# convert the object into a dict
data_subject_right_email_request_dict = data_subject_right_email_request_instance.to_dict()
# create an instance of DataSubjectRightEmailRequest from a dict
data_subject_right_email_request_from_dict = DataSubjectRightEmailRequest.from_dict(data_subject_right_email_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


