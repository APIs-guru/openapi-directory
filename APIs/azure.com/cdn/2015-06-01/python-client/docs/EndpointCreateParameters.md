# EndpointCreateParameters

Endpoint properties required for new endpoint creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Endpoint location | 
**properties** | [**EndpointPropertiesCreateParameters**](EndpointPropertiesCreateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | Endpoint tags | [optional] 

## Example

```python
from openapi_client.models.endpoint_create_parameters import EndpointCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointCreateParameters from a JSON string
endpoint_create_parameters_instance = EndpointCreateParameters.from_json(json)
# print the JSON string representation of the object
print(EndpointCreateParameters.to_json())

# convert the object into a dict
endpoint_create_parameters_dict = endpoint_create_parameters_instance.to_dict()
# create an instance of EndpointCreateParameters from a dict
endpoint_create_parameters_from_dict = EndpointCreateParameters.from_dict(endpoint_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


