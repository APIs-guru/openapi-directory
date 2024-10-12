# DatabaseFlags

Database flags for Cloud SQL instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation. | [optional] 
**value** | **str** | The value of the flag. Boolean flags are set to &#x60;on&#x60; for true and &#x60;off&#x60; for false. This field must be omitted if the flag doesn&#39;t take a value. | [optional] 

## Example

```python
from openapi_client.models.database_flags import DatabaseFlags

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseFlags from a JSON string
database_flags_instance = DatabaseFlags.from_json(json)
# print the JSON string representation of the object
print(DatabaseFlags.to_json())

# convert the object into a dict
database_flags_dict = database_flags_instance.to_dict()
# create an instance of DatabaseFlags from a dict
database_flags_from_dict = DatabaseFlags.from_dict(database_flags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


