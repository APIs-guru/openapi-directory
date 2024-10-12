# APILayerServer

The API layer server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The api layer name | [optional] [readonly] 
**os_version** | **str** | Output only. OS information | [optional] [readonly] 
**resources** | [**List[CloudResource]**](CloudResource.md) | Output only. resources in the component | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_layer_server import APILayerServer

# TODO update the JSON string below
json = "{}"
# create an instance of APILayerServer from a JSON string
api_layer_server_instance = APILayerServer.from_json(json)
# print the JSON string representation of the object
print(APILayerServer.to_json())

# convert the object into a dict
api_layer_server_dict = api_layer_server_instance.to_dict()
# create an instance of APILayerServer from a dict
api_layer_server_from_dict = APILayerServer.from_dict(api_layer_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


