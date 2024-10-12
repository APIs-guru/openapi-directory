# JobDeliveryInfo

Additional delivery info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_date_time** | **datetime** | Scheduled date time. | [optional] 

## Example

```python
from openapi_client.models.job_delivery_info import JobDeliveryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of JobDeliveryInfo from a JSON string
job_delivery_info_instance = JobDeliveryInfo.from_json(json)
# print the JSON string representation of the object
print(JobDeliveryInfo.to_json())

# convert the object into a dict
job_delivery_info_dict = job_delivery_info_instance.to_dict()
# create an instance of JobDeliveryInfo from a dict
job_delivery_info_from_dict = JobDeliveryInfo.from_dict(job_delivery_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


