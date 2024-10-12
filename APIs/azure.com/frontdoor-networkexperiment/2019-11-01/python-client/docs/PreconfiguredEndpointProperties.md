# PreconfiguredEndpointProperties

Defines the properties of a preconfigured endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend** | **str** | The preconfigured endpoint backend | [optional] 
**description** | **str** | The description of the endpoint | [optional] 
**endpoint** | **str** | The endpoint that is preconfigured | [optional] 
**endpoint_type** | **str** | The type of endpoint | [optional] 

## Example

```python
from openapi_client.models.preconfigured_endpoint_properties import PreconfiguredEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PreconfiguredEndpointProperties from a JSON string
preconfigured_endpoint_properties_instance = PreconfiguredEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(PreconfiguredEndpointProperties.to_json())

# convert the object into a dict
preconfigured_endpoint_properties_dict = preconfigured_endpoint_properties_instance.to_dict()
# create an instance of PreconfiguredEndpointProperties from a dict
preconfigured_endpoint_properties_from_dict = PreconfiguredEndpointProperties.from_dict(preconfigured_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


