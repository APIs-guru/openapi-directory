# ImplementationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_version** | **str** | Version of the implemented IX-API schema.  | 
**service_version** | **str** | Version of the API service.  | [optional] 
**supported_network_feature_config_types** | **List[str]** | Array of supported network feature config types.  | 
**supported_network_feature_types** | **List[str]** | Array of supported network feature types.  | 
**supported_network_service_config_types** | **List[str]** | Array of supported network service config types.  | 
**supported_network_service_types** | **List[str]** | Array of network service types, supported by the IX.  | 
**supported_operations** | **List[str]** | Array of implemented operations of the ix-api schema.  | 

## Example

```python
from openapi_client.models.implementation_response import ImplementationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImplementationResponse from a JSON string
implementation_response_instance = ImplementationResponse.from_json(json)
# print the JSON string representation of the object
print(ImplementationResponse.to_json())

# convert the object into a dict
implementation_response_dict = implementation_response_instance.to_dict()
# create an instance of ImplementationResponse from a dict
implementation_response_from_dict = ImplementationResponse.from_dict(implementation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


