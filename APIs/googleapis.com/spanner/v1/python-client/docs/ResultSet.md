# ResultSet

Results from Read or ExecuteSql.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**ResultSetMetadata**](ResultSetMetadata.md) |  | [optional] 
**rows** | **List[List[object]]** | Each element in &#x60;rows&#x60; is a row whose format is defined by metadata.row_type. The ith element in each row matches the ith field in metadata.row_type. Elements are encoded based on type as described here. | [optional] 
**stats** | [**ResultSetStats**](ResultSetStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.result_set import ResultSet

# TODO update the JSON string below
json = "{}"
# create an instance of ResultSet from a JSON string
result_set_instance = ResultSet.from_json(json)
# print the JSON string representation of the object
print(ResultSet.to_json())

# convert the object into a dict
result_set_dict = result_set_instance.to_dict()
# create an instance of ResultSet from a dict
result_set_from_dict = ResultSet.from_dict(result_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


