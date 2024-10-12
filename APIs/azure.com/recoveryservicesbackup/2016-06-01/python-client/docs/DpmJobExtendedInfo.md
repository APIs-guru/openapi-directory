# DpmJobExtendedInfo

Additional information on the DPM workload-specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_error_message** | **str** | Non-localized error message on job execution. | [optional] 
**property_bag** | **Dict[str, str]** | The job properties. | [optional] 
**tasks_list** | [**List[DpmJobTaskDetails]**](DpmJobTaskDetails.md) | List of tasks associated with this job. | [optional] 

## Example

```python
from openapi_client.models.dpm_job_extended_info import DpmJobExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DpmJobExtendedInfo from a JSON string
dpm_job_extended_info_instance = DpmJobExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(DpmJobExtendedInfo.to_json())

# convert the object into a dict
dpm_job_extended_info_dict = dpm_job_extended_info_instance.to_dict()
# create an instance of DpmJobExtendedInfo from a dict
dpm_job_extended_info_from_dict = DpmJobExtendedInfo.from_dict(dpm_job_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


