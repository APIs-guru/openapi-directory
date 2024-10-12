# SeedJobDetails

Details regarding a Seed background job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_profile** | **str** | Output only. The connection profile which was used for the seed job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.seed_job_details import SeedJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SeedJobDetails from a JSON string
seed_job_details_instance = SeedJobDetails.from_json(json)
# print the JSON string representation of the object
print(SeedJobDetails.to_json())

# convert the object into a dict
seed_job_details_dict = seed_job_details_instance.to_dict()
# create an instance of SeedJobDetails from a dict
seed_job_details_from_dict = SeedJobDetails.from_dict(seed_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


