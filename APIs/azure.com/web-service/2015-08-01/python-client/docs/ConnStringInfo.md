# ConnStringInfo

Represents database connection string information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | Connection string value | [optional] 
**name** | **str** | Name of connection string | [optional] 
**type** | **str** | Type of database | 

## Example

```python
from openapi_client.models.conn_string_info import ConnStringInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnStringInfo from a JSON string
conn_string_info_instance = ConnStringInfo.from_json(json)
# print the JSON string representation of the object
print(ConnStringInfo.to_json())

# convert the object into a dict
conn_string_info_dict = conn_string_info_instance.to_dict()
# create an instance of ConnStringInfo from a dict
conn_string_info_from_dict = ConnStringInfo.from_dict(conn_string_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


