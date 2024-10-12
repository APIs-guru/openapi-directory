# ImplementationResponsePartial

API Implementation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_version** | **str** | Version of the implemented IX-API schema.  | [optional] 
**service_version** | **str** | Version of the API service.  | [optional] 
**supported_network_feature_config_types** | **List[str]** | Array of supported network feature config types.  | [optional] 
**supported_network_feature_types** | **List[str]** | Array of supported network feature types.  | [optional] 
**supported_network_service_config_types** | **List[str]** | Array of supported network service config types.  | [optional] 
**supported_network_service_types** | **List[str]** | Array of network service types, supported by the IX.  | [optional] 
**supported_operations** | **List[str]** | Array of implemented operations of the ix-api schema.  | [optional] 

## Example

```python
from openapi_client.models.implementation_response_partial import ImplementationResponsePartial

# TODO update the JSON string below
json = "{}"
# create an instance of ImplementationResponsePartial from a JSON string
implementation_response_partial_instance = ImplementationResponsePartial.from_json(json)
# print the JSON string representation of the object
print(ImplementationResponsePartial.to_json())

# convert the object into a dict
implementation_response_partial_dict = implementation_response_partial_instance.to_dict()
# create an instance of ImplementationResponsePartial from a dict
implementation_response_partial_from_dict = ImplementationResponsePartial.from_dict(implementation_response_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


