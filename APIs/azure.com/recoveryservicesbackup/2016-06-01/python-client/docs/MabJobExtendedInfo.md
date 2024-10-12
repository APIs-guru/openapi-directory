# MabJobExtendedInfo

Additional information for the Azure Backup Server workload-specific job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_error_message** | **str** | Non-localized error message specific to this job. | [optional] 
**property_bag** | **Dict[str, str]** | The job properties. | [optional] 
**tasks_list** | [**List[MabJobTaskDetails]**](MabJobTaskDetails.md) | List of tasks for this job. | [optional] 

## Example

```python
from openapi_client.models.mab_job_extended_info import MabJobExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MabJobExtendedInfo from a JSON string
mab_job_extended_info_instance = MabJobExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(MabJobExtendedInfo.to_json())

# convert the object into a dict
mab_job_extended_info_dict = mab_job_extended_info_instance.to_dict()
# create an instance of MabJobExtendedInfo from a dict
mab_job_extended_info_from_dict = MabJobExtendedInfo.from_dict(mab_job_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


