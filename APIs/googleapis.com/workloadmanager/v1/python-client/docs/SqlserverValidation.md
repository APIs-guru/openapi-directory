# SqlserverValidation

A presentation of SQLServer workload insight. The schema of SqlServer workloads validation related data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | Optional. The agent version collected this data point | [optional] 
**instance** | **str** | Required. The instance_name of the instance that the Insight data comes from. According to https://linter.aip.dev/122/name-suffix: field names should not use the _name suffix unless the field would be ambiguous without it. | [optional] 
**project_id** | **str** | Required. The project_id of the cloud project that the Insight data comes from. | [optional] 
**validation_details** | [**List[SqlserverValidationValidationDetail]**](SqlserverValidationValidationDetail.md) | Optional. A list of SqlServer validation metrics data. | [optional] 

## Example

```python
from openapi_client.models.sqlserver_validation import SqlserverValidation

# TODO update the JSON string below
json = "{}"
# create an instance of SqlserverValidation from a JSON string
sqlserver_validation_instance = SqlserverValidation.from_json(json)
# print the JSON string representation of the object
print(SqlserverValidation.to_json())

# convert the object into a dict
sqlserver_validation_dict = sqlserver_validation_instance.to_dict()
# create an instance of SqlserverValidation from a dict
sqlserver_validation_from_dict = SqlserverValidation.from_dict(sqlserver_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


