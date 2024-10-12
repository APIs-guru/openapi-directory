# Flag

A flag resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_int_values** | **List[str]** | Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values. | [optional] 
**allowed_string_values** | **List[str]** | For &#x60;STRING&#x60; flags, a list of strings that the value can be set to. | [optional] 
**applies_to** | **List[str]** | The database version this flag applies to. Can be MySQL instances: &#x60;MYSQL_8_0&#x60;, &#x60;MYSQL_8_0_18&#x60;, &#x60;MYSQL_8_0_26&#x60;, &#x60;MYSQL_5_7&#x60;, or &#x60;MYSQL_5_6&#x60;. PostgreSQL instances: &#x60;POSTGRES_9_6&#x60;, &#x60;POSTGRES_10&#x60;, &#x60;POSTGRES_11&#x60; or &#x60;POSTGRES_12&#x60;. SQL Server instances: &#x60;SQLSERVER_2017_STANDARD&#x60;, &#x60;SQLSERVER_2017_ENTERPRISE&#x60;, &#x60;SQLSERVER_2017_EXPRESS&#x60;, &#x60;SQLSERVER_2017_WEB&#x60;, &#x60;SQLSERVER_2019_STANDARD&#x60;, &#x60;SQLSERVER_2019_ENTERPRISE&#x60;, &#x60;SQLSERVER_2019_EXPRESS&#x60;, or &#x60;SQLSERVER_2019_WEB&#x60;. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). | [optional] 
**in_beta** | **bool** | Whether or not the flag is considered in beta. | [optional] 
**kind** | **str** | This is always &#x60;sql#flag&#x60;. | [optional] 
**max_value** | **str** | For &#x60;INTEGER&#x60; flags, the maximum allowed value. | [optional] 
**min_value** | **str** | For &#x60;INTEGER&#x60; flags, the minimum allowed value. | [optional] 
**name** | **str** | This is the name of the flag. Flag names always use underscores, not hyphens, for example: &#x60;max_allowed_packet&#x60; | [optional] 
**requires_restart** | **bool** | Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances. | [optional] 
**type** | **str** | The type of the flag. Flags are typed to being &#x60;BOOLEAN&#x60;, &#x60;STRING&#x60;, &#x60;INTEGER&#x60; or &#x60;NONE&#x60;. &#x60;NONE&#x60; is used for flags which do not take a value, such as &#x60;skip_grant_tables&#x60;. | [optional] 

## Example

```python
from openapi_client.models.flag import Flag

# TODO update the JSON string below
json = "{}"
# create an instance of Flag from a JSON string
flag_instance = Flag.from_json(json)
# print the JSON string representation of the object
print(Flag.to_json())

# convert the object into a dict
flag_dict = flag_instance.to_dict()
# create an instance of Flag from a dict
flag_from_dict = Flag.from_dict(flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


