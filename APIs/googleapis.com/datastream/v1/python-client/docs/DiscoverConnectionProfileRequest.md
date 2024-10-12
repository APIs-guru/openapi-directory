# DiscoverConnectionProfileRequest

Request message for 'discover' ConnectionProfile request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_profile** | [**ConnectionProfile**](ConnectionProfile.md) |  | [optional] 
**connection_profile_name** | **str** | A reference to an existing connection profile. | [optional] 
**full_hierarchy** | **bool** | Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE). | [optional] 
**hierarchy_depth** | **int** | The number of hierarchy levels below the current level to be retrieved. | [optional] 
**mysql_rdbms** | [**MysqlRdbms**](MysqlRdbms.md) |  | [optional] 
**oracle_rdbms** | [**OracleRdbms**](OracleRdbms.md) |  | [optional] 
**postgresql_rdbms** | [**PostgresqlRdbms**](PostgresqlRdbms.md) |  | [optional] 

## Example

```python
from openapi_client.models.discover_connection_profile_request import DiscoverConnectionProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverConnectionProfileRequest from a JSON string
discover_connection_profile_request_instance = DiscoverConnectionProfileRequest.from_json(json)
# print the JSON string representation of the object
print(DiscoverConnectionProfileRequest.to_json())

# convert the object into a dict
discover_connection_profile_request_dict = discover_connection_profile_request_instance.to_dict()
# create an instance of DiscoverConnectionProfileRequest from a dict
discover_connection_profile_request_from_dict = DiscoverConnectionProfileRequest.from_dict(discover_connection_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


