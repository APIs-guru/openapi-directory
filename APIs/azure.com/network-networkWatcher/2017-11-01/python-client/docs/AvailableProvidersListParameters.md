# AvailableProvidersListParameters

Constraints that determine the list of available Internet service providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_locations** | **List[str]** | A list of Azure regions. | [optional] 
**city** | **str** | The city or town for available providers list. | [optional] 
**country** | **str** | The country for available providers list. | [optional] 
**state** | **str** | The state for available providers list. | [optional] 

## Example

```python
from openapi_client.models.available_providers_list_parameters import AvailableProvidersListParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProvidersListParameters from a JSON string
available_providers_list_parameters_instance = AvailableProvidersListParameters.from_json(json)
# print the JSON string representation of the object
print(AvailableProvidersListParameters.to_json())

# convert the object into a dict
available_providers_list_parameters_dict = available_providers_list_parameters_instance.to_dict()
# create an instance of AvailableProvidersListParameters from a dict
available_providers_list_parameters_from_dict = AvailableProvidersListParameters.from_dict(available_providers_list_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


