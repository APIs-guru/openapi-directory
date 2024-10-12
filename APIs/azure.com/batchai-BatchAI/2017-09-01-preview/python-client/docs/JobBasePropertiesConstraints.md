# JobBasePropertiesConstraints

Constraints associated with the Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_wall_clock_time** | **str** | Default Value &#x3D; 1 week. | [optional] [default to '7.00:00:00']

## Example

```python
from openapi_client.models.job_base_properties_constraints import JobBasePropertiesConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of JobBasePropertiesConstraints from a JSON string
job_base_properties_constraints_instance = JobBasePropertiesConstraints.from_json(json)
# print the JSON string representation of the object
print(JobBasePropertiesConstraints.to_json())

# convert the object into a dict
job_base_properties_constraints_dict = job_base_properties_constraints_instance.to_dict()
# create an instance of JobBasePropertiesConstraints from a dict
job_base_properties_constraints_from_dict = JobBasePropertiesConstraints.from_dict(job_base_properties_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


