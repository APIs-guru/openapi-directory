# DiscoverConnectionProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mysql_rdbms** | [**MysqlRdbms**](MysqlRdbms.md) |  | [optional] 
**oracle_rdbms** | [**OracleRdbms**](OracleRdbms.md) |  | [optional] 

## Example

```python
from openapi_client.models.discover_connection_profile_response import DiscoverConnectionProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverConnectionProfileResponse from a JSON string
discover_connection_profile_response_instance = DiscoverConnectionProfileResponse.from_json(json)
# print the JSON string representation of the object
print(DiscoverConnectionProfileResponse.to_json())

# convert the object into a dict
discover_connection_profile_response_dict = discover_connection_profile_response_instance.to_dict()
# create an instance of DiscoverConnectionProfileResponse from a dict
discover_connection_profile_response_from_dict = DiscoverConnectionProfileResponse.from_dict(discover_connection_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


