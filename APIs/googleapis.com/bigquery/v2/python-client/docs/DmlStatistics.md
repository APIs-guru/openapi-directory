# DmlStatistics

Detailed statistics for DML statements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_row_count** | **str** | Output only. Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements. | [optional] [readonly] 
**inserted_row_count** | **str** | Output only. Number of inserted Rows. Populated by DML INSERT and MERGE statements | [optional] [readonly] 
**updated_row_count** | **str** | Output only. Number of updated Rows. Populated by DML UPDATE and MERGE statements. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dml_statistics import DmlStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of DmlStatistics from a JSON string
dml_statistics_instance = DmlStatistics.from_json(json)
# print the JSON string representation of the object
print(DmlStatistics.to_json())

# convert the object into a dict
dml_statistics_dict = dml_statistics_instance.to_dict()
# create an instance of DmlStatistics from a dict
dml_statistics_from_dict = DmlStatistics.from_dict(dml_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


