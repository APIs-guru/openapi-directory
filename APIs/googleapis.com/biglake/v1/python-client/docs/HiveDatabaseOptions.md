# HiveDatabaseOptions

Options of a Hive database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_uri** | **str** | Cloud Storage folder URI where the database data is stored, starting with \&quot;gs://\&quot;. | [optional] 
**parameters** | **Dict[str, str]** | Stores user supplied Hive database parameters. | [optional] 

## Example

```python
from openapi_client.models.hive_database_options import HiveDatabaseOptions

# TODO update the JSON string below
json = "{}"
# create an instance of HiveDatabaseOptions from a JSON string
hive_database_options_instance = HiveDatabaseOptions.from_json(json)
# print the JSON string representation of the object
print(HiveDatabaseOptions.to_json())

# convert the object into a dict
hive_database_options_dict = hive_database_options_instance.to_dict()
# create an instance of HiveDatabaseOptions from a dict
hive_database_options_from_dict = HiveDatabaseOptions.from_dict(hive_database_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


