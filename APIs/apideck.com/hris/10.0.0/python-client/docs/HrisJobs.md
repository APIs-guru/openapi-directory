# HrisJobs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employee** | [**Employee**](Employee.md) |  | [optional] 
**jobs** | [**List[HrisJob]**](HrisJob.md) |  | [optional] 

## Example

```python
from openapi_client.models.hris_jobs import HrisJobs

# TODO update the JSON string below
json = "{}"
# create an instance of HrisJobs from a JSON string
hris_jobs_instance = HrisJobs.from_json(json)
# print the JSON string representation of the object
print(HrisJobs.to_json())

# convert the object into a dict
hris_jobs_dict = hris_jobs_instance.to_dict()
# create an instance of HrisJobs from a dict
hris_jobs_from_dict = HrisJobs.from_dict(hris_jobs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


