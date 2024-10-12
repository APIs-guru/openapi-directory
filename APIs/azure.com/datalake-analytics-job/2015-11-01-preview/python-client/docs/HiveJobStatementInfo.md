# HiveJobStatementInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Gets or sets the error message for this statement. | [optional] 
**log_location** | **str** | Gets or sets the log location for this statement. | [optional] 
**result_location** | **str** | Gets or sets the result location for this statement. | [optional] 
**result_preview_location** | **str** | Gets or sets the result preview location for this statement. | [optional] 

## Example

```python
from openapi_client.models.hive_job_statement_info import HiveJobStatementInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HiveJobStatementInfo from a JSON string
hive_job_statement_info_instance = HiveJobStatementInfo.from_json(json)
# print the JSON string representation of the object
print(HiveJobStatementInfo.to_json())

# convert the object into a dict
hive_job_statement_info_dict = hive_job_statement_info_instance.to_dict()
# create an instance of HiveJobStatementInfo from a dict
hive_job_statement_info_from_dict = HiveJobStatementInfo.from_dict(hive_job_statement_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


