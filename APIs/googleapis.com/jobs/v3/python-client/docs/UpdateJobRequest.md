# UpdateJobRequest

Input only. Update job request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**Job**](Job.md) |  | [optional] 
**update_mask** | **str** | Optional but strongly recommended to be provided for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported. | [optional] 

## Example

```python
from openapi_client.models.update_job_request import UpdateJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobRequest from a JSON string
update_job_request_instance = UpdateJobRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateJobRequest.to_json())

# convert the object into a dict
update_job_request_dict = update_job_request_instance.to_dict()
# create an instance of UpdateJobRequest from a dict
update_job_request_from_dict = UpdateJobRequest.from_dict(update_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


