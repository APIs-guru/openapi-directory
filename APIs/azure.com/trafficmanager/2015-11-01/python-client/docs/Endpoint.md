# Endpoint

Class representing a Traffic Manager endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the ID of the Traffic Manager endpoint. | [optional] 
**name** | **str** | Gets or sets the name of the Traffic Manager endpoint. | [optional] 
**properties** | [**EndpointProperties**](EndpointProperties.md) |  | [optional] 
**type** | **str** | Gets or sets the endpoint type of the Traffic Manager endpoint. | [optional] 

## Example

```python
from openapi_client.models.endpoint import Endpoint

# TODO update the JSON string below
json = "{}"
# create an instance of Endpoint from a JSON string
endpoint_instance = Endpoint.from_json(json)
# print the JSON string representation of the object
print(Endpoint.to_json())

# convert the object into a dict
endpoint_dict = endpoint_instance.to_dict()
# create an instance of Endpoint from a dict
endpoint_from_dict = Endpoint.from_dict(endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


