# ComplianceJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Creation time of the compliance job. | 
**download_expires_at** | **datetime** | Expiration time of the download URL. | 
**download_url** | **str** | URL from which the user will retrieve their compliance results. | 
**id** | **str** | Compliance Job ID. | 
**name** | **str** | User-provided name for a compliance job. | [optional] 
**status** | [**ComplianceJobStatus**](ComplianceJobStatus.md) |  | 
**type** | [**ComplianceJobType**](ComplianceJobType.md) |  | 
**upload_expires_at** | **datetime** | Expiration time of the upload URL. | 
**upload_url** | **str** | URL to which the user will upload their Tweet or user IDs. | 

## Example

```python
from openapi_client.models.compliance_job import ComplianceJob

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceJob from a JSON string
compliance_job_instance = ComplianceJob.from_json(json)
# print the JSON string representation of the object
print(ComplianceJob.to_json())

# convert the object into a dict
compliance_job_dict = compliance_job_instance.to_dict()
# create an instance of ComplianceJob from a dict
compliance_job_from_dict = ComplianceJob.from_dict(compliance_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


