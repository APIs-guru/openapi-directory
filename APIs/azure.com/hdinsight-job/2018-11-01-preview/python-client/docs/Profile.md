# Profile

The object containing the job profile information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_file** | **str** | The job configuration file. | [optional] 
**job_id** | [**JobID**](JobID.md) |  | [optional] 
**job_id** | **str** | The full ID of the job. | [optional] 
**job_name** | **str** | The user-specified job name. | [optional] 
**queue_name** | **str** | The name of the queue to which the job is submitted. | [optional] 
**url** | **str** | The link to the web-ui for details of the job. | [optional] 
**user** | **str** | The userid of the person who submitted the job. | [optional] 

## Example

```python
from openapi_client.models.profile import Profile

# TODO update the JSON string below
json = "{}"
# create an instance of Profile from a JSON string
profile_instance = Profile.from_json(json)
# print the JSON string representation of the object
print(Profile.to_json())

# convert the object into a dict
profile_dict = profile_instance.to_dict()
# create an instance of Profile from a dict
profile_from_dict = Profile.from_dict(profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


