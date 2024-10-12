# EtwProviderConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[EtwEventConfiguration]**](EtwEventConfiguration.md) |  | 
**id** | **str** |  | 

## Example

```python
from openapi_client.models.etw_provider_configuration import EtwProviderConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of EtwProviderConfiguration from a JSON string
etw_provider_configuration_instance = EtwProviderConfiguration.from_json(json)
# print the JSON string representation of the object
print(EtwProviderConfiguration.to_json())

# convert the object into a dict
etw_provider_configuration_dict = etw_provider_configuration_instance.to_dict()
# create an instance of EtwProviderConfiguration from a dict
etw_provider_configuration_from_dict = EtwProviderConfiguration.from_dict(etw_provider_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


