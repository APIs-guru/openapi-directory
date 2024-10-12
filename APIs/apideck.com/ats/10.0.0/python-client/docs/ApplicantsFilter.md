# ApplicantsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Id of the job to filter on | [optional] 

## Example

```python
from openapi_client.models.applicants_filter import ApplicantsFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicantsFilter from a JSON string
applicants_filter_instance = ApplicantsFilter.from_json(json)
# print the JSON string representation of the object
print(ApplicantsFilter.to_json())

# convert the object into a dict
applicants_filter_dict = applicants_filter_instance.to_dict()
# create an instance of ApplicantsFilter from a dict
applicants_filter_from_dict = ApplicantsFilter.from_dict(applicants_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


