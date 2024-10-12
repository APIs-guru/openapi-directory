# ServiceCorsConfigurationInfo

The settings for the CORS configuration of the service instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_credentials** | **bool** | If credentials are allowed via CORS. | [optional] 
**headers** | **List[str]** | The headers to be allowed via CORS. | [optional] 
**max_age** | **int** | The max age to be allowed via CORS. | [optional] 
**methods** | **List[str]** | The methods to be allowed via CORS. | [optional] 
**origins** | **List[str]** | The origins to be allowed via CORS. | [optional] 

## Example

```python
from openapi_client.models.service_cors_configuration_info import ServiceCorsConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCorsConfigurationInfo from a JSON string
service_cors_configuration_info_instance = ServiceCorsConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceCorsConfigurationInfo.to_json())

# convert the object into a dict
service_cors_configuration_info_dict = service_cors_configuration_info_instance.to_dict()
# create an instance of ServiceCorsConfigurationInfo from a dict
service_cors_configuration_info_from_dict = ServiceCorsConfigurationInfo.from_dict(service_cors_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


