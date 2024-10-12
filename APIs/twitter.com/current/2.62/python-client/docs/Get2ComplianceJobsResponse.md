# Get2ComplianceJobsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ComplianceJob]**](ComplianceJob.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**meta** | [**Get2ComplianceJobsResponseMeta**](Get2ComplianceJobsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_compliance_jobs_response import Get2ComplianceJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2ComplianceJobsResponse from a JSON string
get2_compliance_jobs_response_instance = Get2ComplianceJobsResponse.from_json(json)
# print the JSON string representation of the object
print(Get2ComplianceJobsResponse.to_json())

# convert the object into a dict
get2_compliance_jobs_response_dict = get2_compliance_jobs_response_instance.to_dict()
# create an instance of Get2ComplianceJobsResponse from a dict
get2_compliance_jobs_response_from_dict = Get2ComplianceJobsResponse.from_dict(get2_compliance_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


