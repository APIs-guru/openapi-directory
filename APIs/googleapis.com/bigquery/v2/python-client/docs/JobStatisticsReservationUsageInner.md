# JobStatisticsReservationUsageInner

Job resource usage breakdown by reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Reservation name or \&quot;unreserved\&quot; for on-demand resources usage. | [optional] 
**slot_ms** | **str** | Total slot milliseconds used by the reservation for a particular job. | [optional] 

## Example

```python
from openapi_client.models.job_statistics_reservation_usage_inner import JobStatisticsReservationUsageInner

# TODO update the JSON string below
json = "{}"
# create an instance of JobStatisticsReservationUsageInner from a JSON string
job_statistics_reservation_usage_inner_instance = JobStatisticsReservationUsageInner.from_json(json)
# print the JSON string representation of the object
print(JobStatisticsReservationUsageInner.to_json())

# convert the object into a dict
job_statistics_reservation_usage_inner_dict = job_statistics_reservation_usage_inner_instance.to_dict()
# create an instance of JobStatisticsReservationUsageInner from a dict
job_statistics_reservation_usage_inner_from_dict = JobStatisticsReservationUsageInner.from_dict(job_statistics_reservation_usage_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


