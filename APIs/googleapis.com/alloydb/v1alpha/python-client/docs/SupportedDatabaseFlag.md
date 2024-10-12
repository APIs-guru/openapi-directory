# SupportedDatabaseFlag

SupportedDatabaseFlag gives general information about a database flag, like type and allowed values. This is a static value that is defined on the server side, and it cannot be modified by callers. To set the Database flags on a particular Instance, a caller should modify the Instance.database_flags field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepts_multiple_values** | **bool** | Whether the database flag accepts multiple values. If true, a comma-separated list of stringified values may be specified. | [optional] 
**flag_name** | **str** | The name of the database flag, e.g. \&quot;max_allowed_packets\&quot;. The is a possibly key for the Instance.database_flags map field. | [optional] 
**integer_restrictions** | [**IntegerRestrictions**](IntegerRestrictions.md) |  | [optional] 
**name** | **str** | The name of the flag resource, following Google Cloud conventions, e.g.: * projects/{project}/locations/{location}/flags/{flag} This field currently has no semantic meaning. | [optional] 
**requires_db_restart** | **bool** | Whether setting or updating this flag on an Instance requires a database restart. If a flag that requires database restart is set, the backend will automatically restart the database (making sure to satisfy any availability SLO&#39;s). | [optional] 
**string_restrictions** | [**StringRestrictions**](StringRestrictions.md) |  | [optional] 
**supported_db_versions** | **List[str]** | Major database engine versions for which this flag is supported. | [optional] 
**value_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.supported_database_flag import SupportedDatabaseFlag

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedDatabaseFlag from a JSON string
supported_database_flag_instance = SupportedDatabaseFlag.from_json(json)
# print the JSON string representation of the object
print(SupportedDatabaseFlag.to_json())

# convert the object into a dict
supported_database_flag_dict = supported_database_flag_instance.to_dict()
# create an instance of SupportedDatabaseFlag from a dict
supported_database_flag_from_dict = SupportedDatabaseFlag.from_dict(supported_database_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


