# DataServer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**is_connected** | **bool** |  | [optional] 
**links** | [**DataServerLinks**](DataServerLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**server_time** | **datetime** |  | [optional] 
**server_version** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.data_server import DataServer

# TODO update the JSON string below
json = "{}"
# create an instance of DataServer from a JSON string
data_server_instance = DataServer.from_json(json)
# print the JSON string representation of the object
print(DataServer.to_json())

# convert the object into a dict
data_server_dict = data_server_instance.to_dict()
# create an instance of DataServer from a dict
data_server_from_dict = DataServer.from_dict(data_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


