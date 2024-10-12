# ProviderListResult

List of resource providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of results. | [optional] 
**value** | [**List[Provider]**](Provider.md) | Gets or sets the list of resource providers. | [optional] 

## Example

```python
from openapi_client.models.provider_list_result import ProviderListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderListResult from a JSON string
provider_list_result_instance = ProviderListResult.from_json(json)
# print the JSON string representation of the object
print(ProviderListResult.to_json())

# convert the object into a dict
provider_list_result_dict = provider_list_result_instance.to_dict()
# create an instance of ProviderListResult from a dict
provider_list_result_from_dict = ProviderListResult.from_dict(provider_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


