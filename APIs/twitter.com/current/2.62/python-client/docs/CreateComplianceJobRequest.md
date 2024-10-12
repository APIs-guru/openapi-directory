# CreateComplianceJobRequest

A request to create a new batch compliance job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | User-provided name for a compliance job. | [optional] 
**resumable** | **bool** | If true, this endpoint will return a pre-signed URL with resumable uploads enabled. | [optional] 
**type** | **str** | Type of compliance job to list. | 

## Example

```python
from openapi_client.models.create_compliance_job_request import CreateComplianceJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateComplianceJobRequest from a JSON string
create_compliance_job_request_instance = CreateComplianceJobRequest.from_json(json)
# print the JSON string representation of the object
print(CreateComplianceJobRequest.to_json())

# convert the object into a dict
create_compliance_job_request_dict = create_compliance_job_request_instance.to_dict()
# create an instance of CreateComplianceJobRequest from a dict
create_compliance_job_request_from_dict = CreateComplianceJobRequest.from_dict(create_compliance_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


