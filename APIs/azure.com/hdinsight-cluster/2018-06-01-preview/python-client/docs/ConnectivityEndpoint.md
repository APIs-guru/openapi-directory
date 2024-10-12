# ConnectivityEndpoint

The connectivity properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the endpoint. | [optional] 
**name** | **str** | The name of the endpoint. | [optional] 
**port** | **int** | The port to connect to. | [optional] 
**protocol** | **str** | The protocol of the endpoint. | [optional] 

## Example

```python
from openapi_client.models.connectivity_endpoint import ConnectivityEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityEndpoint from a JSON string
connectivity_endpoint_instance = ConnectivityEndpoint.from_json(json)
# print the JSON string representation of the object
print(ConnectivityEndpoint.to_json())

# convert the object into a dict
connectivity_endpoint_dict = connectivity_endpoint_instance.to_dict()
# create an instance of ConnectivityEndpoint from a dict
connectivity_endpoint_from_dict = ConnectivityEndpoint.from_dict(connectivity_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


