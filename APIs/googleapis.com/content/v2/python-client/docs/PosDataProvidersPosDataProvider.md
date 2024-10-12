# PosDataProvidersPosDataProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of Pos data Provider. | [optional] 
**full_name** | **str** | The full name of this POS data Provider. | [optional] 
**provider_id** | **str** | The ID of the account. | [optional] 

## Example

```python
from openapi_client.models.pos_data_providers_pos_data_provider import PosDataProvidersPosDataProvider

# TODO update the JSON string below
json = "{}"
# create an instance of PosDataProvidersPosDataProvider from a JSON string
pos_data_providers_pos_data_provider_instance = PosDataProvidersPosDataProvider.from_json(json)
# print the JSON string representation of the object
print(PosDataProvidersPosDataProvider.to_json())

# convert the object into a dict
pos_data_providers_pos_data_provider_dict = pos_data_providers_pos_data_provider_instance.to_dict()
# create an instance of PosDataProvidersPosDataProvider from a dict
pos_data_providers_pos_data_provider_from_dict = PosDataProvidersPosDataProvider.from_dict(pos_data_providers_pos_data_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


