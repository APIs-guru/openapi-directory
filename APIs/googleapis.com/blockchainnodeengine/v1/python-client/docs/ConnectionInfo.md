# ConnectionInfo

The connection information through which to interact with a blockchain node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_info** | [**EndpointInfo**](EndpointInfo.md) |  | [optional] 
**service_attachment** | **str** | Output only. A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_info import ConnectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionInfo from a JSON string
connection_info_instance = ConnectionInfo.from_json(json)
# print the JSON string representation of the object
print(ConnectionInfo.to_json())

# convert the object into a dict
connection_info_dict = connection_info_instance.to_dict()
# create an instance of ConnectionInfo from a dict
connection_info_from_dict = ConnectionInfo.from_dict(connection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


