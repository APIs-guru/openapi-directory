# PrivateEndpointConnectionPropertiesPrivateEndpoint

Private endpoint resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.private_endpoint_connection_properties_private_endpoint import PrivateEndpointConnectionPropertiesPrivateEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateEndpointConnectionPropertiesPrivateEndpoint from a JSON string
private_endpoint_connection_properties_private_endpoint_instance = PrivateEndpointConnectionPropertiesPrivateEndpoint.from_json(json)
# print the JSON string representation of the object
print(PrivateEndpointConnectionPropertiesPrivateEndpoint.to_json())

# convert the object into a dict
private_endpoint_connection_properties_private_endpoint_dict = private_endpoint_connection_properties_private_endpoint_instance.to_dict()
# create an instance of PrivateEndpointConnectionPropertiesPrivateEndpoint from a dict
private_endpoint_connection_properties_private_endpoint_from_dict = PrivateEndpointConnectionPropertiesPrivateEndpoint.from_dict(private_endpoint_connection_properties_private_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


