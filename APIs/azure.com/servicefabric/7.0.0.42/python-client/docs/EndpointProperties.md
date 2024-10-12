# EndpointProperties

Describes a container endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the endpoint. | 
**port** | **int** | Port used by the container. | [optional] 

## Example

```python
from openapi_client.models.endpoint_properties import EndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointProperties from a JSON string
endpoint_properties_instance = EndpointProperties.from_json(json)
# print the JSON string representation of the object
print(EndpointProperties.to_json())

# convert the object into a dict
endpoint_properties_dict = endpoint_properties_instance.to_dict()
# create an instance of EndpointProperties from a dict
endpoint_properties_from_dict = EndpointProperties.from_dict(endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


