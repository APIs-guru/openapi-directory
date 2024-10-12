# StreamingEndpointAccessControl

StreamingEndpoint access control definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**akamai** | [**AkamaiAccessControl**](AkamaiAccessControl.md) |  | [optional] 
**ip** | [**IPAccessControl**](IPAccessControl.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_endpoint_access_control import StreamingEndpointAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingEndpointAccessControl from a JSON string
streaming_endpoint_access_control_instance = StreamingEndpointAccessControl.from_json(json)
# print the JSON string representation of the object
print(StreamingEndpointAccessControl.to_json())

# convert the object into a dict
streaming_endpoint_access_control_dict = streaming_endpoint_access_control_instance.to_dict()
# create an instance of StreamingEndpointAccessControl from a dict
streaming_endpoint_access_control_from_dict = StreamingEndpointAccessControl.from_dict(streaming_endpoint_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


