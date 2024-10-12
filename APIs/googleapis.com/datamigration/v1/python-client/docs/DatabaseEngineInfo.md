# DatabaseEngineInfo

The type and version of a source or destination database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | Required. Engine type. | [optional] 
**version** | **str** | Required. Engine version, for example \&quot;12.c.1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.database_engine_info import DatabaseEngineInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseEngineInfo from a JSON string
database_engine_info_instance = DatabaseEngineInfo.from_json(json)
# print the JSON string representation of the object
print(DatabaseEngineInfo.to_json())

# convert the object into a dict
database_engine_info_dict = database_engine_info_instance.to_dict()
# create an instance of DatabaseEngineInfo from a dict
database_engine_info_from_dict = DatabaseEngineInfo.from_dict(database_engine_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


