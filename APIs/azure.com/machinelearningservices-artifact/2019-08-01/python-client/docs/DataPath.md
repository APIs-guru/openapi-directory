# DataPath


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_store_name** | **str** |  | [optional] 
**relative_path** | **str** |  | [optional] 
**sql_data_path** | [**SqlDataPath**](SqlDataPath.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_path import DataPath

# TODO update the JSON string below
json = "{}"
# create an instance of DataPath from a JSON string
data_path_instance = DataPath.from_json(json)
# print the JSON string representation of the object
print(DataPath.to_json())

# convert the object into a dict
data_path_dict = data_path_instance.to_dict()
# create an instance of DataPath from a dict
data_path_from_dict = DataPath.from_dict(data_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


