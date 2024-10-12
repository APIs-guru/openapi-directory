# ProviderCollection

Collection of providers.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providers** | [**List[Provider]**](Provider.md) |  | [optional] 

## Example

```python
from openapi_client.models.provider_collection import ProviderCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderCollection from a JSON string
provider_collection_instance = ProviderCollection.from_json(json)
# print the JSON string representation of the object
print(ProviderCollection.to_json())

# convert the object into a dict
provider_collection_dict = provider_collection_instance.to_dict()
# create an instance of ProviderCollection from a dict
provider_collection_from_dict = ProviderCollection.from_dict(provider_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


