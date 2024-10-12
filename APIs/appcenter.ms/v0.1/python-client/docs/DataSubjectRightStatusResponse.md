# DataSubjectRightStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | explanation message of the status | 
**sas_url** | **str** | Azure Storage shared access signature (SAS) URL for exported user data. | [optional] 
**sas_url_expired** | **bool** | Whether Azure Storage shared access signature (SAS) URL has expired or not. | [optional] 
**status** | **str** | Status of data subject right request | 

## Example

```python
from openapi_client.models.data_subject_right_status_response import DataSubjectRightStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightStatusResponse from a JSON string
data_subject_right_status_response_instance = DataSubjectRightStatusResponse.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightStatusResponse.to_json())

# convert the object into a dict
data_subject_right_status_response_dict = data_subject_right_status_response_instance.to_dict()
# create an instance of DataSubjectRightStatusResponse from a dict
data_subject_right_status_response_from_dict = DataSubjectRightStatusResponse.from_dict(data_subject_right_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


