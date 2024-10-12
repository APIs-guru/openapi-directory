# RefreshDetails

Fields for tracking refresh job on the share or container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_manifest_file** | **str** | Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job. | [optional] 
**in_progress_refresh_job_id** | **str** | If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress. | [optional] 
**last_completed_refresh_job_time_in_utc** | **datetime** | Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job. | [optional] 
**last_job** | **str** | Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job. | [optional] 

## Example

```python
from openapi_client.models.refresh_details import RefreshDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshDetails from a JSON string
refresh_details_instance = RefreshDetails.from_json(json)
# print the JSON string representation of the object
print(RefreshDetails.to_json())

# convert the object into a dict
refresh_details_dict = refresh_details_instance.to_dict()
# create an instance of RefreshDetails from a dict
refresh_details_from_dict = RefreshDetails.from_dict(refresh_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


