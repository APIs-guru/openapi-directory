# EndpointUpdateParameters

Properties required to create a new endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**EndpointPropertiesUpdateParameters**](EndpointPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | Endpoint tags. | [optional] 

## Example

```python
from openapi_client.models.endpoint_update_parameters import EndpointUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointUpdateParameters from a JSON string
endpoint_update_parameters_instance = EndpointUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(EndpointUpdateParameters.to_json())

# convert the object into a dict
endpoint_update_parameters_dict = endpoint_update_parameters_instance.to_dict()
# create an instance of EndpointUpdateParameters from a dict
endpoint_update_parameters_from_dict = EndpointUpdateParameters.from_dict(endpoint_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


