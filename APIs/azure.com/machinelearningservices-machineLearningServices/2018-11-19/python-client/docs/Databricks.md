# Databricks

A DataFactory compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabricksAllOfProperties**](DatabricksAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.databricks import Databricks

# TODO update the JSON string below
json = "{}"
# create an instance of Databricks from a JSON string
databricks_instance = Databricks.from_json(json)
# print the JSON string representation of the object
print(Databricks.to_json())

# convert the object into a dict
databricks_dict = databricks_instance.to_dict()
# create an instance of Databricks from a dict
databricks_from_dict = Databricks.from_dict(databricks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


