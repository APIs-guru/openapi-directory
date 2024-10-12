# RowLevelSecurityStatistics

Statistics for row-level security.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_level_security_applied** | **bool** | Whether any accessed data was protected by row access policies. | [optional] 

## Example

```python
from openapi_client.models.row_level_security_statistics import RowLevelSecurityStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of RowLevelSecurityStatistics from a JSON string
row_level_security_statistics_instance = RowLevelSecurityStatistics.from_json(json)
# print the JSON string representation of the object
print(RowLevelSecurityStatistics.to_json())

# convert the object into a dict
row_level_security_statistics_dict = row_level_security_statistics_instance.to_dict()
# create an instance of RowLevelSecurityStatistics from a dict
row_level_security_statistics_from_dict = RowLevelSecurityStatistics.from_dict(row_level_security_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


