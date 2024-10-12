# FrontEndServer

The front end server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The frontend name | [optional] [readonly] 
**os_version** | **str** | Output only. OS information | [optional] [readonly] 
**resources** | [**List[CloudResource]**](CloudResource.md) | Output only. resources in the component | [optional] [readonly] 

## Example

```python
from openapi_client.models.front_end_server import FrontEndServer

# TODO update the JSON string below
json = "{}"
# create an instance of FrontEndServer from a JSON string
front_end_server_instance = FrontEndServer.from_json(json)
# print the JSON string representation of the object
print(FrontEndServer.to_json())

# convert the object into a dict
front_end_server_dict = front_end_server_instance.to_dict()
# create an instance of FrontEndServer from a dict
front_end_server_from_dict = FrontEndServer.from_dict(front_end_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


