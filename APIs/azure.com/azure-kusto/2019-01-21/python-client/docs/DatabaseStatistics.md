# DatabaseStatistics

A class that contains database statistics information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **float** | The database size - the total size of compressed data and index in bytes. | [optional] 

## Example

```python
from openapi_client.models.database_statistics import DatabaseStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseStatistics from a JSON string
database_statistics_instance = DatabaseStatistics.from_json(json)
# print the JSON string representation of the object
print(DatabaseStatistics.to_json())

# convert the object into a dict
database_statistics_dict = database_statistics_instance.to_dict()
# create an instance of DatabaseStatistics from a dict
database_statistics_from_dict = DatabaseStatistics.from_dict(database_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


