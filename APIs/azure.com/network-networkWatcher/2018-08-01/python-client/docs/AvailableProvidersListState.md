# AvailableProvidersListState

State details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cities** | [**List[AvailableProvidersListCity]**](AvailableProvidersListCity.md) | List of available cities or towns in the state. | [optional] 
**providers** | **List[str]** | A list of Internet service providers. | [optional] 
**state_name** | **str** | The state name. | [optional] 

## Example

```python
from openapi_client.models.available_providers_list_state import AvailableProvidersListState

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProvidersListState from a JSON string
available_providers_list_state_instance = AvailableProvidersListState.from_json(json)
# print the JSON string representation of the object
print(AvailableProvidersListState.to_json())

# convert the object into a dict
available_providers_list_state_dict = available_providers_list_state_instance.to_dict()
# create an instance of AvailableProvidersListState from a dict
available_providers_list_state_from_dict = AvailableProvidersListState.from_dict(available_providers_list_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


