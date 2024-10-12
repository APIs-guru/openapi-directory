# DataBoxHeavyJobSecrets

The secrets related to a DataBoxHeavy job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cabinet_pod_secrets** | [**List[DataBoxHeavySecret]**](DataBoxHeavySecret.md) | Contains the list of secret objects for a DataBoxHeavy job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_box_heavy_job_secrets import DataBoxHeavyJobSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxHeavyJobSecrets from a JSON string
data_box_heavy_job_secrets_instance = DataBoxHeavyJobSecrets.from_json(json)
# print the JSON string representation of the object
print(DataBoxHeavyJobSecrets.to_json())

# convert the object into a dict
data_box_heavy_job_secrets_dict = data_box_heavy_job_secrets_instance.to_dict()
# create an instance of DataBoxHeavyJobSecrets from a dict
data_box_heavy_job_secrets_from_dict = DataBoxHeavyJobSecrets.from_dict(data_box_heavy_job_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


