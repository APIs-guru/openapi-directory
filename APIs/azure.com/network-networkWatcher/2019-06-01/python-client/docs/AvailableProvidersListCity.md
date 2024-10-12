# AvailableProvidersListCity

City or town details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city_name** | **str** | The city or town name. | [optional] 
**providers** | **List[str]** | A list of Internet service providers. | [optional] 

## Example

```python
from openapi_client.models.available_providers_list_city import AvailableProvidersListCity

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProvidersListCity from a JSON string
available_providers_list_city_instance = AvailableProvidersListCity.from_json(json)
# print the JSON string representation of the object
print(AvailableProvidersListCity.to_json())

# convert the object into a dict
available_providers_list_city_dict = available_providers_list_city_instance.to_dict()
# create an instance of AvailableProvidersListCity from a dict
available_providers_list_city_from_dict = AvailableProvidersListCity.from_dict(available_providers_list_city_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


