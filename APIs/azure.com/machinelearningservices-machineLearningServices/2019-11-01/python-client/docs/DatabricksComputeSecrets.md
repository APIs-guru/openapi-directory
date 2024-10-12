# DatabricksComputeSecrets

Secrets related to a Machine Learning compute based on Databricks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databricks_access_token** | **str** | access token for databricks account. | [optional] 

## Example

```python
from openapi_client.models.databricks_compute_secrets import DatabricksComputeSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of DatabricksComputeSecrets from a JSON string
databricks_compute_secrets_instance = DatabricksComputeSecrets.from_json(json)
# print the JSON string representation of the object
print(DatabricksComputeSecrets.to_json())

# convert the object into a dict
databricks_compute_secrets_dict = databricks_compute_secrets_instance.to_dict()
# create an instance of DatabricksComputeSecrets from a dict
databricks_compute_secrets_from_dict = DatabricksComputeSecrets.from_dict(databricks_compute_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


