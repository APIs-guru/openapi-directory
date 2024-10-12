# ApplyJobDetails

Details regarding an Apply background job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_profile** | **str** | Output only. The connection profile which was used for the apply job. | [optional] [readonly] 
**filter** | **str** | Output only. AIP-160 based filter used to specify the entities to apply | [optional] [readonly] 

## Example

```python
from openapi_client.models.apply_job_details import ApplyJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyJobDetails from a JSON string
apply_job_details_instance = ApplyJobDetails.from_json(json)
# print the JSON string representation of the object
print(ApplyJobDetails.to_json())

# convert the object into a dict
apply_job_details_dict = apply_job_details_instance.to_dict()
# create an instance of ApplyJobDetails from a dict
apply_job_details_from_dict = ApplyJobDetails.from_dict(apply_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


