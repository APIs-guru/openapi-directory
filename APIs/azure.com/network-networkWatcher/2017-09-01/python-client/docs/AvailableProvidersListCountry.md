# AvailableProvidersListCountry

Country details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_name** | **str** | The country name. | [optional] 
**providers** | **List[str]** | A list of Internet service providers. | [optional] 
**states** | [**List[AvailableProvidersListState]**](AvailableProvidersListState.md) | List of available states in the country. | [optional] 

## Example

```python
from openapi_client.models.available_providers_list_country import AvailableProvidersListCountry

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProvidersListCountry from a JSON string
available_providers_list_country_instance = AvailableProvidersListCountry.from_json(json)
# print the JSON string representation of the object
print(AvailableProvidersListCountry.to_json())

# convert the object into a dict
available_providers_list_country_dict = available_providers_list_country_instance.to_dict()
# create an instance of AvailableProvidersListCountry from a dict
available_providers_list_country_from_dict = AvailableProvidersListCountry.from_dict(available_providers_list_country_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


