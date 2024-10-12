# CreateComplianceJobResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ComplianceJob**](ComplianceJob.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_compliance_job_response import CreateComplianceJobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateComplianceJobResponse from a JSON string
create_compliance_job_response_instance = CreateComplianceJobResponse.from_json(json)
# print the JSON string representation of the object
print(CreateComplianceJobResponse.to_json())

# convert the object into a dict
create_compliance_job_response_dict = create_compliance_job_response_instance.to_dict()
# create an instance of CreateComplianceJobResponse from a dict
create_compliance_job_response_from_dict = CreateComplianceJobResponse.from_dict(create_compliance_job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


