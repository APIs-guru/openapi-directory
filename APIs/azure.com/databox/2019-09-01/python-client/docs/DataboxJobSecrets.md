# DataboxJobSecrets

The secrets related to a databox job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pod_secrets** | [**List[DataBoxSecret]**](DataBoxSecret.md) | Contains the list of secret objects for a job. | [optional] 

## Example

```python
from openapi_client.models.databox_job_secrets import DataboxJobSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of DataboxJobSecrets from a JSON string
databox_job_secrets_instance = DataboxJobSecrets.from_json(json)
# print the JSON string representation of the object
print(DataboxJobSecrets.to_json())

# convert the object into a dict
databox_job_secrets_dict = databox_job_secrets_instance.to_dict()
# create an instance of DataboxJobSecrets from a dict
databox_job_secrets_from_dict = DataboxJobSecrets.from_dict(databox_job_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


