# CreateUSqlJobProperties

U-SQL job properties used when submitting U-SQL jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compile_mode** | **str** | the specific compilation mode for the job used during execution. If this is not specified during submission, the server will determine the optimal compilation mode. | [optional] 

## Example

```python
from openapi_client.models.create_u_sql_job_properties import CreateUSqlJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUSqlJobProperties from a JSON string
create_u_sql_job_properties_instance = CreateUSqlJobProperties.from_json(json)
# print the JSON string representation of the object
print(CreateUSqlJobProperties.to_json())

# convert the object into a dict
create_u_sql_job_properties_dict = create_u_sql_job_properties_instance.to_dict()
# create an instance of CreateUSqlJobProperties from a dict
create_u_sql_job_properties_from_dict = CreateUSqlJobProperties.from_dict(create_u_sql_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


