# OpenIdConnectProviderCollection

Paged OpenIdProviders list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[OpenidConnectProviderContract]**](OpenidConnectProviderContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.open_id_connect_provider_collection import OpenIdConnectProviderCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OpenIdConnectProviderCollection from a JSON string
open_id_connect_provider_collection_instance = OpenIdConnectProviderCollection.from_json(json)
# print the JSON string representation of the object
print(OpenIdConnectProviderCollection.to_json())

# convert the object into a dict
open_id_connect_provider_collection_dict = open_id_connect_provider_collection_instance.to_dict()
# create an instance of OpenIdConnectProviderCollection from a dict
open_id_connect_provider_collection_from_dict = OpenIdConnectProviderCollection.from_dict(open_id_connect_provider_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


