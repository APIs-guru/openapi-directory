# PosDataProviders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country code. | [optional] 
**pos_data_providers** | [**List[PosDataProvidersPosDataProvider]**](PosDataProvidersPosDataProvider.md) | A list of POS data providers. | [optional] 

## Example

```python
from openapi_client.models.pos_data_providers import PosDataProviders

# TODO update the JSON string below
json = "{}"
# create an instance of PosDataProviders from a JSON string
pos_data_providers_instance = PosDataProviders.from_json(json)
# print the JSON string representation of the object
print(PosDataProviders.to_json())

# convert the object into a dict
pos_data_providers_dict = pos_data_providers_instance.to_dict()
# create an instance of PosDataProviders from a dict
pos_data_providers_from_dict = PosDataProviders.from_dict(pos_data_providers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


