# DataSubjectRightDeleteStatusRequest200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | explanation message of the status | 
**sas_url** | **str** | Azure Storage shared access signature (SAS) URL for exported user data. | [optional] 
**sas_url_expired** | **bool** | Whether Azure Storage shared access signature (SAS) URL has expired or not. | [optional] 
**status** | **str** | Status of data subject right request | 

## Example

```python
from openapi_client.models.data_subject_right_delete_status_request200_response import DataSubjectRightDeleteStatusRequest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DataSubjectRightDeleteStatusRequest200Response from a JSON string
data_subject_right_delete_status_request200_response_instance = DataSubjectRightDeleteStatusRequest200Response.from_json(json)
# print the JSON string representation of the object
print(DataSubjectRightDeleteStatusRequest200Response.to_json())

# convert the object into a dict
data_subject_right_delete_status_request200_response_dict = data_subject_right_delete_status_request200_response_instance.to_dict()
# create an instance of DataSubjectRightDeleteStatusRequest200Response from a dict
data_subject_right_delete_status_request200_response_from_dict = DataSubjectRightDeleteStatusRequest200Response.from_dict(data_subject_right_delete_status_request200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


