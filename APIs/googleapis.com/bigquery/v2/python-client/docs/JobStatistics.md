# JobStatistics

Statistics for a single job execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_ratio** | **float** | Output only. [TrustedTester] Job progress (0.0 -&gt; 1.0) for LOAD and EXTRACT jobs. | [optional] [readonly] 
**copy** | [**JobStatistics5**](JobStatistics5.md) |  | [optional] 
**creation_time** | **str** | Output only. Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs. | [optional] [readonly] 
**data_masking_statistics** | [**DataMaskingStatistics**](DataMaskingStatistics.md) |  | [optional] 
**end_time** | **str** | Output only. End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state. | [optional] [readonly] 
**extract** | [**JobStatistics4**](JobStatistics4.md) |  | [optional] 
**final_execution_duration_ms** | **str** | Output only. The duration in milliseconds of the execution of the final attempt of this job, as BigQuery may internally re-attempt to execute the job. | [optional] [readonly] 
**load** | [**JobStatistics3**](JobStatistics3.md) |  | [optional] 
**num_child_jobs** | **str** | Output only. Number of child jobs executed. | [optional] [readonly] 
**parent_job_id** | **str** | Output only. If this is a child job, specifies the job ID of the parent. | [optional] [readonly] 
**query** | [**JobStatistics2**](JobStatistics2.md) |  | [optional] 
**quota_deferments** | **List[str]** | Output only. Quotas which delayed this job&#39;s start time. | [optional] [readonly] 
**reservation_usage** | [**List[JobStatisticsReservationUsageInner]**](JobStatisticsReservationUsageInner.md) | Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated. | [optional] [readonly] 
**reservation_id** | **str** | Output only. Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job. | [optional] [readonly] 
**row_level_security_statistics** | [**RowLevelSecurityStatistics**](RowLevelSecurityStatistics.md) |  | [optional] 
**script_statistics** | [**ScriptStatistics**](ScriptStatistics.md) |  | [optional] 
**session_info** | [**SessionInfo**](SessionInfo.md) |  | [optional] 
**start_time** | **str** | Output only. Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE. | [optional] [readonly] 
**total_bytes_processed** | **str** | Output only. Total bytes processed for the job. | [optional] [readonly] 
**total_slot_ms** | **str** | Output only. Slot-milliseconds for the job. | [optional] [readonly] 
**transaction_info** | [**TransactionInfo**](TransactionInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_statistics import JobStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatistics from a JSON string
job_statistics_instance = JobStatistics.from_json(json)
# print the JSON string representation of the object
print(JobStatistics.to_json())

# convert the object into a dict
job_statistics_dict = job_statistics_instance.to_dict()
# create an instance of JobStatistics from a dict
job_statistics_from_dict = JobStatistics.from_dict(job_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


