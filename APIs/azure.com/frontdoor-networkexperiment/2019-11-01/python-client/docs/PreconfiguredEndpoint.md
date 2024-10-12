# PreconfiguredEndpoint

Defines the properties of a preconfigured endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the endpoint | [optional] 
**properties** | [**PreconfiguredEndpointProperties**](PreconfiguredEndpointProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.preconfigured_endpoint import PreconfiguredEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of PreconfiguredEndpoint from a JSON string
preconfigured_endpoint_instance = PreconfiguredEndpoint.from_json(json)
# print the JSON string representation of the object
print(PreconfiguredEndpoint.to_json())

# convert the object into a dict
preconfigured_endpoint_dict = preconfigured_endpoint_instance.to_dict()
# create an instance of PreconfiguredEndpoint from a dict
preconfigured_endpoint_from_dict = PreconfiguredEndpoint.from_dict(preconfigured_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


