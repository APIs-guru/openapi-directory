# ConnStringValueTypePair

Database connection string value to type pair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of database | 
**value** | **str** | Value of pair | [optional] 

## Example

```python
from openapi_client.models.conn_string_value_type_pair import ConnStringValueTypePair

# TODO update the JSON string below
json = "{}"
# create an instance of ConnStringValueTypePair from a JSON string
conn_string_value_type_pair_instance = ConnStringValueTypePair.from_json(json)
# print the JSON string representation of the object
print(ConnStringValueTypePair.to_json())

# convert the object into a dict
conn_string_value_type_pair_dict = conn_string_value_type_pair_instance.to_dict()
# create an instance of ConnStringValueTypePair from a dict
conn_string_value_type_pair_from_dict = ConnStringValueTypePair.from_dict(conn_string_value_type_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


