# HiveJobProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executed_statement_count** | **int** | Gets or sets the number of statements that have been run based on the script | [optional] 
**logs_location** | **str** | Gets or sets the Hive logs location | [optional] 
**statement_count** | **int** | Gets or sets the number of statements that will be run based on the script | [optional] 
**statement_info** | [**List[HiveJobStatementInfo]**](HiveJobStatementInfo.md) | Gets or sets the statement information for each statement in the script | [optional] 
**warehouse_location** | **str** | Gets or sets the runtime version of the U-SQL engine to use | [optional] 

## Example

```python
from openapi_client.models.hive_job_properties import HiveJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HiveJobProperties from a JSON string
hive_job_properties_instance = HiveJobProperties.from_json(json)
# print the JSON string representation of the object
print(HiveJobProperties.to_json())

# convert the object into a dict
hive_job_properties_dict = hive_job_properties_instance.to_dict()
# create an instance of HiveJobProperties from a dict
hive_job_properties_from_dict = HiveJobProperties.from_dict(hive_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


